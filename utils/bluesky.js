import Fetch from "@11ty/eleventy-fetch";
import { segmentize } from "@atcute/bluesky-richtext-segmenter";
import {
    CompositeDidDocumentResolver,
    DohJsonHandleResolver,
    LocalActorResolver,
    PlcDidDocumentResolver,
    WebDidDocumentResolver,
    WellKnownHandleResolver,
} from "@atcute/identity-resolver";

const APPVIEW = "https://public.api.bsky.app";
const POST_COLLECTION = "app.bsky.feed.post";
const LINK_FACET = "app.bsky.richtext.facet#link";
const CACHE_DURATION = "1h";

// Responses are cached on disk, and an expired cache is used if the network is down
function fetchJSON(url) {
    return Fetch(url, { duration: CACHE_DURATION, type: "json" });
}

/**
 * A `fetch` for the identity resolvers that goes through the same disk cache. Status and
 * headers are cached alongside the body, as the resolvers check the response content-type.
 */
async function cachedFetch(input, init = {}) {
    const cached = await Fetch(String(input), {
        duration: CACHE_DURATION,
        type: "buffer",
        returnType: "response",
        fetchOptions: { headers: init.headers, redirect: init.redirect },
    });
    const headers = new Headers(cached.headers);
    // The body is already decoded, so these would no longer describe it
    headers.delete("content-encoding");
    headers.delete("content-length");
    return new Response(cached.body, { status: cached.status, headers });
}

const dnsHandleResolver = new DohJsonHandleResolver({
    dohUrl: "https://cloudflare-dns.com/dns-query",
    fetch: cachedFetch,
});
const httpHandleResolver = new WellKnownHandleResolver({ fetch: cachedFetch });

const actorResolver = new LocalActorResolver({
    // CompositeHandleResolver always starts both lookups at once, so the well-known request
    // would go out on every build even when DNS answers from cache. Only fall back when DNS fails.
    handleResolver: {
        resolve: (handle, options) =>
            dnsHandleResolver.resolve(handle, options).catch(() => httpHandleResolver.resolve(handle, options)),
    },
    didDocumentResolver: new CompositeDidDocumentResolver({
        methods: {
            plc: new PlcDidDocumentResolver({ fetch: cachedFetch }),
            web: new WebDidDocumentResolver({ fetch: cachedFetch }),
        },
    }),
});

async function listPostRecords({ did, pds }) {
    const records = [];
    let cursor;
    do {
        const params = new URLSearchParams({ repo: did, collection: POST_COLLECTION, limit: "100" });
        if (cursor) params.set("cursor", cursor);
        const page = await fetchJSON(new URL(`/xrpc/com.atproto.repo.listRecords?${params}`, pds).href);
        records.push(...page.records);
        cursor = page.records.length ? page.cursor : undefined;
    } while (cursor);
    return records;
}

// Quoted posts can live on anyone's PDS, so they are looked up through the Bluesky AppView
async function getPosts(uris) {
    const posts = new Map();
    for (let i = 0; i < uris.length; i += 25) {
        const params = new URLSearchParams();
        uris.slice(i, i + 25).forEach((uri) => params.append("uris", uri));
        const page = await fetchJSON(`${APPVIEW}/xrpc/app.bsky.feed.getPosts?${params}`);
        page.posts.forEach((post) => posts.set(post.uri, post));
    }
    return posts;
}

function escapeHTML(text) {
    return text.replace(
        /[&<>"']/g,
        (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char],
    );
}

function facetHref(feature) {
    switch (feature.$type) {
        case LINK_FACET:
            return /^https?:\/\//.test(feature.uri) ? feature.uri : undefined;
        case "app.bsky.richtext.facet#mention":
            return `https://bsky.app/profile/${feature.did}`;
        case "app.bsky.richtext.facet#tag":
            return `https://bsky.app/hashtag/${encodeURIComponent(feature.tag)}`;
    }
}

// Splits text into runs that share the same facets. The segmenter expects facets in order.
function segments(text, facets = []) {
    return segmentize(
        text,
        [...facets].sort((a, b) => a.index.byteStart - b.index.byteStart),
    );
}

/**
 * Converts post text and its facets (links, mentions, hashtags) into HTML.
 *
 * @param {string} text - The post text.
 * @param {object[]} [facets] - The post's richtext facets.
 * @return {string} Escaped HTML with links and line breaks.
 */
export function renderRichText(text, facets) {
    return segments(text, facets)
        .map(({ text, features }) => {
            const href = features?.map(facetHref).find(Boolean);
            return href ? `<a href="${escapeHTML(href)}">${escapeHTML(text)}</a>` : escapeHTML(text);
        })
        .join("")
        .replace(/\n/g, "<br />");
}

/**
 * Plain text summary of a post for lists and meta descriptions. Links (which Bluesky
 * often truncates mid-URL) and trailing hashtags are dropped as they read as noise there.
 *
 * @param {string} text - The post text.
 * @param {object[]} [facets] - The post's richtext facets.
 * @return {string} Unescaped plain text on a single line.
 */
function summarise(text, facets) {
    const plain = segments(text, facets)
        .filter(({ features }) => !features?.some((feature) => feature.$type === LINK_FACET))
        .map(({ text }) => text)
        .join("");

    return plain
        .replace(/https?:\/\/\S+/g, "")
        .replace(/(\s*#[^\s#]+)+\s*$/u, "")
        .replace(/\s+/g, " ")
        .trim();
}

function blobUrl(did, blob, size) {
    return `https://cdn.bsky.app/img/${size}/plain/${did}/${blob.ref.$link}@jpeg`;
}

function postUrl(atUri, handle) {
    const [, , did, collection, rkey] = atUri.split("/");
    return collection === POST_COLLECTION ? `https://bsky.app/profile/${handle ?? did}/post/${rkey}` : null;
}

function toQuote(ref, post) {
    const url = postUrl(ref.uri, post?.author.handle);
    if (!url) return null;
    if (!post) return { url };
    return {
        url,
        author: escapeHTML(post.author.displayName || post.author.handle),
        handle: escapeHTML(post.author.handle),
        html: renderRichText(post.record.text, post.record.facets),
    };
}

function quoteRef(embed) {
    if (embed?.$type === "app.bsky.embed.record") return embed.record;
    if (embed?.$type === "app.bsky.embed.recordWithMedia") return embed.record.record;
    return null;
}

function toNote(record, { did, handle, quotedPosts }) {
    const { text, facets, createdAt, embed } = record.value;
    const media = embed?.$type === "app.bsky.embed.recordWithMedia" ? embed.media : embed;
    const quoted = quoteRef(embed);
    const external = media?.$type === "app.bsky.embed.external" ? media.external : null;

    return {
        rkey: record.uri.split("/").pop(),
        date: new Date(createdAt),
        text,
        // Plain, escaped text for places links can't go (list items, meta descriptions)
        excerpt: escapeHTML(summarise(text, facets) || external?.title || "A note from Ethan"),
        html: renderRichText(text, facets),
        images:
            media?.$type === "app.bsky.embed.images"
                ? media.images.map((image) => ({
                      src: blobUrl(did, image.image, "feed_fullsize"),
                      alt: escapeHTML(image.alt ?? ""),
                      width: image.aspectRatio?.width,
                      height: image.aspectRatio?.height,
                  }))
                : [],
        external: external && {
            url: escapeHTML(external.uri),
            host: new URL(external.uri).host.replace(/^www\./, ""),
            title: escapeHTML(external.title ?? ""),
            description: escapeHTML(external.description ?? ""),
            thumb: external.thumb ? blobUrl(did, external.thumb, "feed_thumbnail") : null,
        },
        hasVideo: media?.$type === "app.bsky.embed.video",
        quote: quoted && toQuote(quoted, quotedPosts.get(quoted.uri)),
        url: postUrl(record.uri, handle),
    };
}

/**
 * Fetches an account's top-level Bluesky posts (no replies or reposts), newest first.
 *
 * @param {string} handle - An atproto handle, e.g. "ethana.dev".
 * @return {Promise<object[]>} Notes ready for templates.
 */
export async function getNotes(handle) {
    const { did, pds } = await actorResolver.resolve(handle);
    const posts = (await listPostRecords({ did, pds })).filter((record) => !record.value.reply);

    const quoteUris = posts
        .map((record) => quoteRef(record.value.embed)?.uri)
        .filter((uri) => uri?.includes(`/${POST_COLLECTION}/`));
    const quotedPosts = await getPosts(quoteUris).catch((error) => {
        console.warn(`[notes] Couldn't load quoted posts, linking to them instead: ${error.message}`);
        return new Map();
    });

    return posts
        .map((record) => toNote(record, { did, handle, quotedPosts }))
        .sort((a, b) => b.date - a.date);
}

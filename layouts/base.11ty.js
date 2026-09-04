import { getFilePath } from "../utils/getFilePath.js";
import { inlineCSS } from "../utils/inlineCSS.js";

export const data = {
    sharedCSS: [
        getFilePath("../css/shared/variables.css"),
        getFilePath("../css/shared/utilities.css"),
        getFilePath("../css/shared/base.css"),
    ],
    pageCSS: [],
};

export function render(data) {
    const title = data.title !== undefined ? data.title : data.meta.title;
    const description =
        data.description !== undefined
            ? data.description
            : data.meta.description;

    const cssFiles = [...data.sharedCSS, ...data.pageCSS];
    const css = inlineCSS(cssFiles);

    const siteUrl = data.meta.url.replace(/\/$/, "");
    const pageUrl = `${siteUrl}${data.page.url}`;
    const ogType = data.ogType || "website";
    const ogImage = `${siteUrl}${data.ogImage || "/public/icon-512.png"}`;

    const articleMeta =
        ogType === "article"
            ? `
                <meta property="article:published_time" content="${data.page.date.toISOString()}" />
                <meta property="article:author" content="${data.meta.author.name}" />
                ${(data.tags || [])
                    .filter((t) => t !== "post")
                    .map(
                        (t) =>
                            `<meta property="article:tag" content="${t}" />`,
                    )
                    .join("")}`
            : "";

    return `
        <!DOCTYPE html>
        <html lang="${data.meta.language}">
            <head>
                <title>${title}</title>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="${description}" />
                <meta name="generator" content="${data.eleventy.generator}" />
                <meta name="fediverse:creator" content="${data.meta.author.mastodon}"/>
                <meta name="theme-color" content="#f4f4dc" />

                <meta property="og:title" content="${title}" />
                <meta property="og:description" content="${description}" />
                <meta property="og:url" content="${pageUrl}" />
                <meta property="og:type" content="${ogType}" />
                <meta property="og:image" content="${ogImage}" />
                <meta property="og:image:alt" content="${data.ogImageAlt || data.meta.title}" />
                <meta property="og:site_name" content="${data.meta.title}" />
                <meta property="og:locale" content="en_US" />
                ${articleMeta}

                <link rel="alternate" href="/feed/feed.xml" type="application/atom+xml" title="${data.meta.title}" />
                <link rel="alternate" href="/feed/feed.json" type="application/json" title="${data.meta.title}" />
                <link rel="icon" type="image/png" href="/public/favicon.ico" />
                <link rel="apple-touch-icon" href="/public/apple-touch-icon.png" />
                <link rel="manifest" href="/public/site.webmanifest" />
                <link rel="canonical" href="${pageUrl}" />
                <link rel="me" href="https://social.lol/@zaphod" />
                <link rel="me" href="https://sifa.id/p/ethana.dev" />
                <style>${css}</style>
                <script>
                    addEventListener("pageswap", (e) => {
                        if (!e.viewTransition) return;
                        const toPath = new URL(e.activation.entry.url).pathname;
                        const toPost = /^\\/blog\\/[^/]+\\/?$/.test(toPath);
                        document.querySelectorAll('[style*="view-transition-name: post-title"]').forEach((el) => {
                            const link = el.closest("a[href]");
                            const keep = toPost && link && new URL(link.href).pathname === toPath;
                            if (!keep) el.style.viewTransitionName = "none";
                        });
                    });
                </script>
            </head>
			<body>
                <a href="#skip" class="visually-hidden">Skip to main content</a>

                ${data.content}

                <footer>
                    <div class="footer-content">
                      <a href="/" class="fat-hover-link">© Ethan Anderson 2026</a>
                   			<div class="footer-links">
                          <a href="/blog" aria-label="Blog">
                              <svg><use href="/public/icons.svg#blog-icon" /></svg>
                          </a>
                          <a href="/feed/feed.xml" aria-label="RSS">
                              <svg><use href="/public/icons.svg#rss-icon" /></svg>
                          </a>
                          <a href="https://bsky.app/profile/ethana.dev" target="_blank" aria-label="Bluesky (Opens in a new tab)">
                              <svg><use href="/public/icons.svg#bluesky-icon" /></svg>
                          </a>
                      		<a href="https://github.com/ZaphodAndo" target="_blank" aria-label="Github (Opens in a new tab)">
                              <svg><use href="/public/icons.svg#git-icon" /></svg>
                          </a>
                          <a href="https://www.linkedin.com/in/ethan-anderson-41ba9a172/" target="_blank" aria-label="Linkedin (Opens in a new tab)">
                              <svg><use href="/public/icons.svg#linkedin-icon" /></svg>
                          </a>
                        </div>
                    </div>
                </footer>
            </body>
        </html>
    `;
}

import { getFilePath } from "../utils/getFilePath.js";
import { readableDate, htmlDateString } from "../utils/dates.js";

export const data = {
    layout: "base.11ty.js",
    pagination: {
        data: "notes",
        size: 1,
        alias: "note",
    },
    permalink: (data) => `/notes/${data.note.rkey}/`,
    eleventyExcludeFromCollections: true,
    eleventyComputed: {
        title: (data) => `Note from ${readableDate(data.note.date)} - Ethan Anderson`,
        description: (data) => data.note.excerpt,
    },
    pageCSS: [
        getFilePath("../css/shared/header.css"),
        getFilePath("../css/views/note.css"),
    ],
};

function images(note) {
    if (!note.images.length) return "";
    return `
        <div class="note-images">
            ${note.images
                .map(
                    (image) =>
                        `<img src="${image.src}" alt="${image.alt}" ${image.width ? `width="${image.width}" height="${image.height}"` : ""} loading="lazy" />`,
                )
                .join("")}
        </div>`;
}

function external(note) {
    if (!note.external) return "";
    const { url, host, title, description, thumb } = note.external;
    return `
        <a class="note-card" href="${url}">
            ${thumb ? `<img src="${thumb}" alt="" loading="lazy" />` : ""}
            <span class="note-card-text">
                <span class="note-card-title">${title || host}</span>
                ${description ? `<span class="note-card-description">${description}</span>` : ""}
                <span class="note-card-host">${host}</span>
            </span>
        </a>`;
}

function quote(note) {
    if (!note.quote) return "";
    const { url, author, handle, html } = note.quote;
    if (!html) return `<p class="note-quote-link"><a href="${url}">View the quoted post on Bluesky</a></p>`;
    return `
        <blockquote class="note-quote" cite="${url}">
            <p>${html}</p>
            <p class="note-quote-author">— <a href="${url}">${author}</a> <span>@${handle}</span></p>
        </blockquote>`;
}

export function render(data) {
    const { note, notes } = data;
    const index = data.pagination.pageNumber;
    const newer = notes[index - 1];
    const older = notes[index + 1];

    return `
        <header>
            <div class="header-content">
                <div class="header-nav">
                    <a class="home-link" href="/">Home</a>
                    <a href="/menu" aria-label="Menu">
                        <svg><use href="/public/icons.svg#menu-icon" /></svg>
                    </a>
                </div>
            </div>
        </header>

        <main id="skip">
            <article class="note">
                <h1 class="visually-hidden">Note from ${readableDate(note.date)}</h1>
                <p class="note-text">${note.html}</p>
                ${images(note)}
                ${external(note)}
                ${quote(note)}
                ${note.hasVideo ? `<p class="note-quote-link"><a href="${note.url}">Watch the video on Bluesky</a></p>` : ""}
                <p class="note-signature">
                    — Ethan,
                    <time datetime="${htmlDateString(note.date)}">${readableDate(note.date)}</time>
                </p>
            </article>

            <p class="note-links">
                <a class="fat-hover-link" href="${note.url}">View on Bluesky</a>
                <a class="fat-hover-link" href="/notes/">All notes</a>
            </p>
        </main>

        ${
            newer || older
                ? `<nav class="note-nav" aria-label="Newer and older notes">
                    <div class="links-nextprev">
                        ${older ? `<a class="fat-hover-link" href="/notes/${older.rkey}/">Older note</a>` : ""}
                        ${newer ? `<a class="fat-hover-link" href="/notes/${newer.rkey}/">Newer note</a>` : ""}
                    </div>
                </nav>`
                : ""
        }
    `;
}

import { getFilePath } from "../utils/getFilePath.js";
import { inlineCSS } from "../utils/inlineCSS.js";

export const data = {
    eleventyExcludeFromCollections: true,
    title: "Menu - Ethan Anderson",
    sharedCSS: [
        getFilePath("../css/shared/variables.css"),
        getFilePath("../css/shared/utilities.css"),
        getFilePath("../css/shared/base.css"),
    ],
    pageCSS: [getFilePath("../css/views/menu.css")],
};

export function render(data) {
    const title = data.title !== undefined ? data.title : data.meta.title;
    const description =
        data.description !== undefined
            ? data.description
            : data.meta.description;

    const cssFiles = [...data.sharedCSS, ...data.pageCSS];
    const css = inlineCSS(cssFiles);

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
                <link rel="alternate" href="/feed/feed.xml" type="application/atom+xml" title="${data.meta.title}" />
                <link rel="alternate" href="/feed/feed.json" type="application/json" title="${data.meta.title}" />
                <link rel="icon" type="image/png" href="/public/favicon.ico" />
                <link rel="me" href="https://social.lol/@zaphod" />
                <link rel="me" href="https://sifa.id/p/ethana.dev" />
                <style>${css}</style>
            </head>
			<body>
                <a href="#skip" class="visually-hidden">Skip to main content</a>
                <header>
                    <h1>Menu</h1>
                    <nav>
                        <a href="/" onclick="document.referrer ? history.back() : window.location.href = '/'; return false;">
                            <svg><use href="/public/icons.svg#close-icon" /></svg>
                        </a>
                    </nav>
                </header>
                <main id="skip">
                    <ul>
                        <li class="blog-link">
                            <a href="/blog">
                                <svg><use href="/public/icons.svg#blog-icon" /></svg>
                                <span>Blog</span>
                                <svg><use href="/public/icons.svg#chevron-icon" /></svg>
                            </a>
                        </li>
                        <li class="tags-link">
                            <a href="/tags">
                                <svg><use href="/public/icons.svg#tag-icon" /></svg>
                                <span>Tags</span>
                                <svg><use href="/public/icons.svg#chevron-icon" /></svg>
                            </a>
                        </li>
                    </ul>
                </main>
            </body>
        </html>
    `;
}

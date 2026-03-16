import { getFilePath } from "../utils/getFilePath.js";
import { inlineCSS } from "../utils/inlineCSS.js";

export const data = {
    sharedCSS: [
        getFilePath("../css/shared/variables.css"),
        getFilePath("../css/shared/utilities.css"),
        getFilePath("../css/shared/base.css")
    ],
    pageCSS: []
};

export function render(data) {
    const title = data.title !== undefined ? data.title : data.meta.title;
    const description = data.description !== undefined ? data.description : data.meta.description;

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
                <style>${css}</style>
            </head>
            <body>
                <a href="#skip" class="visually-hidden">Skip to main content</a>
                <nav>
                    <a href="/">Ethan</a>
                    <a href="/blog">blog</a>
                    <a href="/notes">notes</a>
                    <a href="/bookmarks">bookmarks</a>
                    <a href="/reading">reading</a>
                    <a href="/settings">settings</a>
                </nav>
                <main id="skip">                            
                    ${data.content}
                </main>
                <footer>
                    <a href="/">© ethan anderson 2026</a>
                </footer>
            </body>
        </html>
    `;
}

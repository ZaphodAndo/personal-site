import { getFilePath } from "../utils/getFilePath.js";
import { inlineCSS } from "../utils/inlineCSS.js";

export const data = {
    sharedCSS: [getFilePath("../css/shared/index.css")],
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
    const isHome = data.page.url === "/";

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

                ${data.content}

                <footer>
         			<div class="footer-links">
                        <a class="fat-hover-link" href="/blog">Archive</a>
                        <a class="fat-hover-link" href="/feed/feed.xml">RSS</a>
                        <a class="fat-hover-link" href="https://social.lol/@zaphod" rel="me" target="_blank">Mastodon</a>
        				<a class="fat-hover-link" href="https://github.com/ZaphodAndo" rel="noopener noreferrer" target="_blank">Github</a>
         			</div>
          		</footer>
            </body>
        </html>
    `;
}

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
    data.description !== undefined ? data.description : data.meta.description;

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

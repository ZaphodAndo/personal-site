import { getFilePath } from "../utils/getFilePath.js";
import { readableDate, htmlDateString } from "../utils/dates.js";
import { filterTagList } from "../utils/tags.js";
import { slugify } from "../utils/slugify.js";

export const data = {
    layout: "base.11ty.js",
    ogType: "article",
    pageCSS: [
        getFilePath("../css/shared/header.css"),
        getFilePath("../css/views/post.css"),
        getFilePath("../css/shared/prism-diff.css"),
        getFilePath("../node_modules/prismjs/themes/prism-okaidia.css"),
    ],
};

export function render(data) {
    const tags = filterTagList(data.tags);
    const tagsHtml = tags
        .map(
            (tag) =>
                `<li><a href="/tags/${slugify(tag)}/" class="post-tag">${tag}</a></li>`,
        )
        .join("");

    const posts = data.collections?.post ?? [];
    const currentIndex = posts.findIndex((p) => p.url === data.page.url);
    const previousPost = currentIndex > 0 ? posts[currentIndex - 1] : null;
    const nextPost =
        currentIndex >= 0 && currentIndex < posts.length - 1
            ? posts[currentIndex + 1]
            : null;

    const navHtml =
        previousPost || nextPost
            ? `
                    <div class="links-nextprev">
                        ${previousPost ? `<a class="fat-hover-link" href="${previousPost.url}">Previous post</a>` : ""}
                        ${nextPost ? `<a class="fat-hover-link" href="${nextPost.url}">Next post</a>` : ""}
                    </div>`
            : "";

    return `
        <header>
            <div class="header-content">
                <div class="header-nav">
                    <a class="home-link" href="/">Home</a>
                    <a href="/menu" aria-label="Menu">
                        <svg><use href="/public/icons.svg#menu-icon" /></svg>
                    </a>
                </div>
                <h1>${data.title}</h1>
                <time datetime="${htmlDateString(data.page.date)}">${readableDate(data.page.date)}</time>
            </div>
        </header>

        <main id="skip">
            <div class="blog-content">
                <ul class="post-metadata">
                    ${tagsHtml}
                </ul>

                ${data.content}
            </div>
        </main>

        <div class="post-meta-wrapper">
            <div class="post-meta">${navHtml}
            </div>
        </div>
    `;
}

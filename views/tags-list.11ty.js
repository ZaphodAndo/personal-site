import { getFilePath } from "../utils/getFilePath.js";
import { getAllTags, filterTagList } from "../utils/tags.js";
import { slugify } from "../utils/slugify.js";

export const data = {
    layout: "base.11ty.js",
    permalink: "/tags/",
    title: "Tags - Ethan Anderson",
    pageCSS: [
        getFilePath("../css/shared/header.css"),
        getFilePath("../css/views/tags.css"),
    ],
};

export function render(data) {
    const all = data.collections?.all ?? [];
    const tags = filterTagList(getAllTags(all));

    const tagLinks = tags
        .map(
            (tag) =>
                `<a href="/tags/${slugify(tag)}/" class="post-tag">${tag}</a>`,
        )
        .join("\n            ");

    return `
        <header>
            <div class="header-content">
                <div class="header-nav">
                    <a class="home-link" href="/">Home</a>
                    <a href="/menu" aria-label="Menu">
                        <svg><use href="/public/icons.svg#menu-icon" /></svg>
                    </a>
                </div>
                <h1>Tags</h1>
                <p>A list of all tags.</p>
            </div>
        </header>

        <main id="skip">
            <div class="tags-content tags-list">
                ${tagLinks}
            </div>
        </main>
    `;
}

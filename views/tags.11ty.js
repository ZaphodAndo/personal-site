import { getFilePath } from "../utils/getFilePath.js";
import { slugify } from "../utils/slugify.js";
import { postsList } from "../utils/components/postsList.js";

export const data = {
    layout: "home.11ty.js",
    pagination: {
        data: "collections",
        size: 1,
        alias: "tag",
        filter: ["all", "post", "posts", "tagList"],
        addAllPagesToCollections: true,
    },
    eleventyComputed: {
        title: (data) => `Ethan Anderson - Tagged "${data.tag}"`,
        permalink: (data) => `/tags/${slugify(data.tag)}/`,
    },
    pageCSS: [
        getFilePath("../css/shared/header.css"),
        getFilePath("../css/views/tags.css"),
    ],
};

export function render(data) {
    const posts = data.collections?.[data.tag] ?? [];

    return `
        <header>
            <div class="header-content">
                <a class="home-link" href="/">Home</a>
                <h1>Tagged "${data.tag}"</h1>
                <p>See <a class="fat-hover-link" href="/tags/">all tags</a>.</p>
            </div>
        </header>

        <main id="skip">
            <div class="tags-content">
                ${postsList({ posts, currentUrl: data.page.url })}
            </div>
        </main>
    `;
}

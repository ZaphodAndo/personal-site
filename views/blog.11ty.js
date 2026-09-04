import { getFilePath } from "../utils/getFilePath.js";
import { slugify } from "../utils/slugify.js";

export const data = {
    layout: "base.11ty.js",
    title: "Blog - Ethan Anderson",
    eleventyNavigation: {
        key: "Archive",
        order: 2,
    },
    pageCSS: [
        getFilePath("../css/views/blog.css"),
        getFilePath("../css/shared/header.css"),
    ],
};

export function render(data) {
    const posts = data.collections?.post ?? [];
    const byYear = new Map();
    for (const post of posts) {
        const year = new Date(post.date).getUTCFullYear();
        if (!byYear.has(year)) byYear.set(year, []);
        byYear.get(year).push(post);
    }

    const years = [...byYear.keys()].sort((a, b) => b - a);

    const sections = years
        .map((year) => {
            const items = byYear
                .get(year)
                .slice()
                .reverse()
                .map(
                    (post) =>
                        `<li><a class="fat-hover-link" href="${post.url}" style="view-transition-name: post-title-${slugify(post.url)}">${post.data.title}</a></li>`,
                )
                .join("");
            return `<h2>${year}</h2><ol reversed>${items}</ol>`;
        })
        .join("");

    return `
        <header>
            <div class="header-content">
                <div class="header-nav">
                    <a class="home-link" href="/">Home</a>
                    <a href="/menu" aria-label="Menu">
                        <svg><use href="/public/icons.svg#menu-icon" /></svg>
                    </a>
                </div>
                <h1>Blog</h1>
                <p>
                    An <a class="fat-hover-link" href="/feed/feed.xml">RSS feed</a> and a
                    <a class="fat-hover-link" href="/tags">list of tags</a> are also
                    available.
                </p>
            </div>
        </header>

        <main id="skip">
            <div class="blog-content">
                ${sections}
            </div>
        </main>
    `;
}

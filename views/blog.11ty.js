import { getFilePath } from "../utils/getFilePath.js";

export const data = {
    layout: "archive.11ty.js",
    title: "Ethan Anderson - Archive",
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
                        `<li><a class="fat-hover-link" href="${post.url}">${post.data.title}</a></li>`,
                )
                .join("");
            return `<h2>${year}</h2><ol reversed>${items}</ol>`;
        })
        .join("");

    return `
        <div class="blog-content">
            ${sections}
        </div>
    `;
}

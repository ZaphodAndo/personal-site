import { getFilePath } from "../utils/getFilePath.js";

export const data = {
    layout: "base.11ty.js",
    title: "Ethan Anderson - Blog",
    pageCSS: [
        getFilePath("../css/views/post.css"),
        getFilePath("../css/shared/code-block.css"),
    ],
};

export function render(data) {
    return `
        <h1 class="post__title">${data.title}</h1>

        <div class="post__meta">
            <time datetime="${data.date.toISOString()}">
                ${data.date.toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                })}
            </time>
            <span>·</span>
            <span>no comments</span>
        </div>

        <div class="post__tags">
            ${data.tags
                .filter((tag) => tag !== "post")
                .map((tag) => `<div class="post__tag">${tag}</div>`)
                .join("")}
        </div>

        ${data.content}
    `;
}

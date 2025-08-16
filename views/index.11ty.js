import { getFilePath } from "../utils/getFilePath.js";

export const data = {
    layout: "base.11ty.js",
    title: "Ethan Anderson - Home",
    pageCSS: [
        getFilePath("../css/views/index.css")
    ]
};

export function render(data) {
    return `
        <h1>${data.title}</h1>
    `;
}

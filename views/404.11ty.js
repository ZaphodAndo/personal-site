import { getFilePath } from "../utils/getFilePath.js";

export const data = {
    layout: "home.11ty.js",
    permalink: "404.html",
    eleventyExcludeFromCollections: true,
    title: "Ethan Anderson - 404",
    pageCSS: [getFilePath("../css/views/404.css")],
};

export function render() {
    return `
        <main>
            <img src="/public/crab404.png" />
            <h1>404 Page not found</h1>
            <p>
                Try the <a class="fat-hover-link" href="/">homepage</a> or
                <a class="fat-hover-link" href="/blog">blog</a> instead
            </p>
        </main>
    `;
}

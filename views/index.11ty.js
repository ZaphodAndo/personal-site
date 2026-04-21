import { getFilePath } from "../utils/getFilePath.js";

function constructPost(post) {
    return `
        <a href="${post.url}" class="home__post">
            <p>${post.data.title}</p>
            <p class="home__post-description">${post.data.description}</p>
            <time datetime="${post.date.toISOString()}">
                ${post.date.toLocaleDateString("en-GB", { day: "2-digit", month: "2-digit", year: "numeric" })}
            </time>
        </a>
    `;
}

export const data = {
    layout: "base.11ty.js",
    title: "Ethan Anderson - Home",
    pageCSS: [getFilePath("../css/views/index.css")],
};

export function render(data) {
    return `
        <div class="home__header home__header--with-description">
            <span class="home__header-number">00</span>
            <p class="home__header-description">developer. linux tinkerer. javascript sufferer.
            building things for the web and the terminal.</p>
        </div>

        <div>
            <div class="home__header">
                <span class="home__header-number">01</span>
                <h2 class="home__header-title">Latest Posts</h2>
            </div>
            <div class="home__latest-posts">
                ${data.collections.post
                    .sort((a, b) => b.date - a.date)
                    .slice(0, 3)
                    .map((post) => constructPost(post))
                    .join("\n")}
            </div>
        </div>

        <div>
            <div class="home__header">
                <span class="home__header-number">02</span>
                <h2 class="home__header-title">Projects</h2>
            </div>
            <ul class="home__projects-list">
                <li>
                    <a href="https://github.com/ZaphodAndo/hacker-news" target="_blank">hacker-news</a>
                    <p>minimal hn client</p>
                </li>
                <li>
                    <a href="https://github.com/ZaphodAndo/linqem" target="_blank">linqem</a>
                    <p>link aggregator for the web</p>
                </li>
                <li>
                    <a href="https://github.com/ZaphodAndo/scribble" target="_blank">scribble</a>
                    <p>worse version of paint</p>
                </li>
                <li>
                    <a href="https://github.com/ZaphodAndo/scuffed-text-ui" target="_blank">scuffed-text-ui</a>
                    <p>alternating caps text converter</p>
                </li>
            </ul>
        </div>

        <div>
            <div class="home__header">
                <span class="home__header-number">03</span>
                <h2 class="home__header-title">"Fun" Zone</h2>
            </div>
            <div class="home__fun-zone">
                <button type="button"><svg><use href="public/icons.svg#rain-icon" /></svg> start rain</button>
                <button type="button"><svg><use href="public/icons.svg#firework-icon" /></svg> fireworks</button>
            </div>
        </div>
    `;
}

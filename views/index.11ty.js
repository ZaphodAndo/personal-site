import { getFilePath } from "../utils/getFilePath.js";
import { iconNav } from "../utils/components/iconNav.js";
import { postsList } from "../utils/components/postsList.js";

const NUMBER_OF_LATEST_POSTS = 4;

export const data = {
    layout: "base.11ty.js",
    title: "Home - Ethan Anderson",
    pageCSS: [getFilePath("../css/views/home.css")],
};

export function render(data) {
    const posts = data.collections?.post ?? [];
    const postsCount = posts.length;
    const latestCount = Math.min(postsCount, NUMBER_OF_LATEST_POSTS);
    const latestPosts = posts.slice(-NUMBER_OF_LATEST_POSTS);

    return `
        <header>
            <div class="header-content">
                <a href="/" class="home-link">Hi, I'm Ethan</a>
                <p>
                    A frontend developer with an interest in design, specialising in web
                    technology. <br />Working at
                    <a class="fat-hover-link" href="https://pebblepad.com/" target="_blank" rel="noopener noreferrer">PebblePad.</a>
                </p>
            </div>
        </header>
    
        <main id="skip">
            <div class="posts">
                <div class="posts-head">
                    <h2 class="postlist-title">
                        Latest Post${latestCount !== 1 ? "s" : ""}
                    </h2>
                    ${iconNav()}
                </div>
    
                ${postsList({ posts: latestPosts, currentUrl: data.page.url, counterStart: postsCount })}
            </div>
        </main>
    `;
}

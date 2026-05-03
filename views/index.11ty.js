import { getFilePath } from "../utils/getFilePath.js";
import { iconNav } from "../utils/components/iconNav.js";
import { postsList } from "../utils/components/postsList.js";

const NUMBER_OF_LATEST_POSTS = 4;

export const data = {
    layout: "landing.11ty.js",
    title: "Ethan Anderson - Home",
    pageCSS: [getFilePath("../css/views/home.css")],
};

export function render(data) {
    const posts = data.collections?.post ?? [];
    const postsCount = posts.length;
    const latestCount = Math.min(postsCount, NUMBER_OF_LATEST_POSTS);
    const latestPosts = posts.slice(-NUMBER_OF_LATEST_POSTS);

    return `
        <div class="posts">
            <div class="posts-head">
                <h2 class="postlist-title">
                    Latest Post${latestCount !== 1 ? "s" : ""}
                </h2>
                ${iconNav()}
            </div>

            ${postsList({ posts: latestPosts, currentUrl: data.page.url, counterStart: postsCount })}
        </div>
    `;
}

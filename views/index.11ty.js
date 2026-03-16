import { getFilePath } from "../utils/getFilePath.js";

function constructPost(post) {
    return `
        <div>
            <a href="${post.url}">${post.data.title}</a>
            <time datetime="${post.date.toISOString()}">
                ${post.date.toLocaleDateString("en-GB", { day: "2-digit", month: "2-digit", year: "numeric" })}
            </time>
        </div>
    `;
}

export const data = {
    layout: "base.11ty.js",
    title: "Ethan Anderson - Home",
    pageCSS: [
        getFilePath("../css/views/index.css")
    ]
};

export function render(data) {
    return `
    <div class="grid">
        <div class="grid-item">
            <img src="/public/profile-image.webp" alt="" />
            <a href="https://github.com/ZaphodAndo" target="_blank">github</a>
            <a href="https://bsky.app/profile/ethana.dev" target="_blank">bluesky</a>
            <a href="https://social.lol/@zaphod" rel="me" target="_blank">mastodon</a>
            <a href="https://www.linkedin.com/in/ethan-anderson-41ba9a172/" target="_blank">linkedin</a>
        </div>
        <div class="grid-item">
            <p>Hi I'm Ethan a software engineer working at PebblePad.</p>
            <p>This is my personal site where I write a new blog post at a blistering cadence of about 1 per year.</p>
            <p>I should really write something interesting about me here but im terrible at that. 🦀</p>
        </div>
        <div class="grid-item">
              <p>[Latest posts]</p>
              ${data.collections.post
                  .sort((a, b) => b.date - a.date)
                  .slice(0, 4)
                  .map(post => constructPost(post))
                  .join("\n")}
        </div>
        <div class="grid-item">
              <p>[Projects]</p>
              <a href="" target="_blank">hacker-news</a>
              <a href="" target="_blank">linqem</a>
              <a href="" target="_blank">scribble</a>
              <a href="" target="_blank">scuffed-text-ui</a>
        </div>
        <div class="grid-item">
            <button type="button" class="grid-item__button">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.34141 6C7.16508 3.66962 9.38756 2 12 2C15.3137 2 18 4.68629 18 8C20.2091 8 22 9.79086 22 12C22 14.2091 20.2091 16 18 16H7C4.23858 16 2 13.7614 2 11C2 8.46898 3.8806 6.37721 6.32069 6.04576M7 20L6 22M12 20L11 22M17 20L16 22" 
                          stroke="#ed2f5b" 
                          stroke-width="1.5" 
                          stroke-linecap="round" 
                          stroke-linejoin="round">
                    </path>
                </svg>
                Start rain
            </button>
            <button type="button" class="grid-item__button">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 17V21M21 19H17M12 3C12 7.97053 7.97053 12 3 12C7.97053 12 12 16.0295 12 21C12 16.0295 16.0295 12 21 12C16.0295 12 12 7.97053 12 3ZM5 3C5 4.10456 4.10456 5 3 5C4.10456 5 5 5.89544 5 7C5 5.89544 5.89544 5 7 5C5.89544 5 5 4.10456 5 3Z" 
                          stroke="#ed2f5b" 
                          stroke-width="1.5" 
                          stroke-linecap="round" 
                          stroke-linejoin="round">
                    </path>
                </svg>
                Fireworks
            </button>
        </div>
    </div>
    `;
}

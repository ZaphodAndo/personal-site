import { readableDate, htmlDateString } from "../dates.js";

export function postsList({ posts, currentUrl, counterStart }) {
  const start = (counterStart ?? posts.length) + 1;
  const items = [...posts]
    .reverse()
    .map((post) => {
      const isActive = post.url === currentUrl;
      const title = post.data.title
        ? post.data.title
        : `<code>${post.url}</code>`;
      return `
            <a href="${post.url}" class="postlist-item${isActive ? " postlist-item-active" : ""}" title="${post.data.title ?? ""}">
                <p class="post-title">${title}</p>
                <time class="post-date" datetime="${htmlDateString(post.date)}">${readableDate(post.date)}</time>
            </a>`;
    })
    .join("");

  return `
    <style>.postlist { counter-reset: start-from ${start} }</style>
    <div reversed class="postlist">${items}</div>
  `;
}

export function iconNav() {
  return `
    <nav>
      <a class="nav-item" href="/feed/feed.xml" aria-label="RSS">
          <svg><use href="/public/icons.svg#rss-icon" /></svg>
      </a>
      <a class="nav-item" href="/blog" aria-label="Blog">
          <svg><use href="/public/icons.svg#blog-icon" /></svg>
      </a>
    </nav>`;
}

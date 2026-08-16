export function iconNav() {
    return `
        <nav>
            <a class="nav-item" href="/menu" aria-label="Menu">
                <svg><use href="/public/icons.svg#menu-icon" /></svg>
            </a>
            <a class="nav-item" href="/blog" aria-label="Blog">
                <svg><use href="/public/icons.svg#blog-icon" /></svg>
            </a>
        </nav>
    `;
}

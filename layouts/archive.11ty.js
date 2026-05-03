export const data = {
    layout: "base.11ty.js",
};

export function render(data) {
    return `
        <header>
            <div class="header-content">
                <a class="home-link" href="/">Home</a>
                <h1>Archive</h1>
                <p>
                    An <a class="fat-hover-link" href="/feed/feed.xml">RSS feed</a> and a
                    <a class="fat-hover-link" href="/tags">list of tags</a> are also
                    available.
                </p>
            </div>
        </header>

        <main id="skip">
            ${data.content}
        </main>
    `;
}

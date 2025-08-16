export const data = {
    layout: "base.11ty.js",
    title: "Ethan Anderson - Blog",
};

export function render(data) {
    return `
        <h1>${data.title}</h1>
        <ul>        
            ${data.collections.post
                .map((post) => `<li><a href="${post.page.url}">${post.data.title}</a></li>`)
                .join("\n")}
        </ul>
    `;
}

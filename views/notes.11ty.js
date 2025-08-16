export const data = {
    layout: "base.11ty.js",
    title: "Ethan Anderson - Notes",
};

export function render(data) {
    return `<h1>${data.title}</h1>`;
}

function displayUrl(url) {
    const { host, pathname } = new URL(url);
    return `${host.replace(/^www\./, "")}${pathname.replace(/\/$/, "")}`;
}

export function projectsList({ projects }) {
    const items = projects
        .map(
            (project) => `
            <a href="${project.url}" class="project-item" target="_blank" rel="noopener noreferrer">
                <div class="project-bar" aria-hidden="true">
                    <span class="project-dots"><span></span><span></span><span></span></span>
                    <span class="project-url">${displayUrl(project.url)}</span>
                </div>
                <div class="project-body">
                    <p class="project-title">${project.title}</p>
                    <p class="project-description">${project.description}</p>
                    <span class="project-language">${project.language}</span>
                </div>
                <span class="visually-hidden">(Opens in a new tab)</span>
            </a>`,
        )
        .join("");

    return `<div class="projectlist">${items}</div>`;
}

import { getFilePath } from "../utils/getFilePath.js";
import { dayTime, monthAndYear } from "../utils/dates.js";

export const data = {
    layout: "base.11ty.js",
    title: "Notes - Ethan Anderson",
    description: "Short notes from Ethan, posted to Bluesky.",
    pageCSS: [
        getFilePath("../css/shared/header.css"),
        getFilePath("../css/views/notes.css"),
    ],
};

export function render(data) {
    const notes = data.notes ?? [];
    const byYear = new Map();
    for (const note of notes) {
        const { year, month } = monthAndYear(note.date);
        if (!byYear.has(year)) byYear.set(year, new Map());
        const byMonth = byYear.get(year);
        if (!byMonth.has(month)) byMonth.set(month, []);
        byMonth.get(month).push(note);
    }

    const sections = [...byYear]
        .map(([year, byMonth]) => {
            const months = [...byMonth]
                .map(([month, monthNotes]) => {
                    const items = monthNotes
                        .map(
                            (note) => `
                            <li>
                                <a class="fat-hover-link" href="/notes/${note.rkey}/"><time datetime="${note.date.toISOString()}">${dayTime(note.date)}</time></a>
                            </li>`,
                        )
                        .join("");
                    return `<h3 class="notes-month">${month}</h3><ol reversed>${items}</ol>`;
                })
                .join("");
            return `<h2 class="notes-year year-heading">${year}</h2>${months}`;
        })
        .join("");

    return `
        <header>
            <div class="header-content">
                <div class="header-nav">
                    <a class="home-link" href="/">Home</a>
                    <a href="/menu" aria-label="Menu">
                        <svg><use href="/public/icons.svg#menu-icon" /></svg>
                    </a>
                </div>
                <h1>Notes</h1>
                <p>
                    Short thoughts, also posted on
                    <a class="fat-hover-link" href="https://bsky.app/profile/${data.meta.author.bluesky}">Bluesky</a>.
                </p>
            </div>
        </header>

        <main id="skip">
            <div class="notes-content">
                ${sections || "<p>No notes yet.</p>"}
            </div>
        </main>
    `;
}

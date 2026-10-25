const readableFormatter = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
});

export function readableDate(date) {
    return readableFormatter.format(new Date(date));
}

export function htmlDateString(date) {
    return new Date(date).toISOString().slice(0, 10);
}

const noteTimeFormatter = new Intl.DateTimeFormat("en-GB", {
    weekday: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "Europe/London",
});
const noteMonthFormatter = new Intl.DateTimeFormat("en-GB", {
    month: "long",
    year: "numeric",
    timeZone: "Europe/London",
});

export function dayTime(date) {
    return noteTimeFormatter.format(new Date(date));
}

export function monthAndYear(date) {
    const parts = noteMonthFormatter.formatToParts(new Date(date));
    return {
        month: parts.find((part) => part.type === "month").value,
        year: parts.find((part) => part.type === "year").value,
    };
}

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

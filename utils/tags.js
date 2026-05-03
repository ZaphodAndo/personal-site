const EXCLUDED = new Set(["all", "nav", "post", "posts"]);

export function filterTagList(tags = []) {
    return tags.filter((tag) => !EXCLUDED.has(tag));
}

export function getAllTags(collection) {
    const tags = new Set();
    for (const item of collection) {
        for (const tag of item.data.tags || []) {
            tags.add(tag);
        }
    }
    return filterTagList([...tags]);
}

import { readFileSync } from "node:fs";
import { getFilePath } from "../utils/getFilePath.js";
import { getNotes } from "../utils/bluesky.js";

export default function () {
    // Read rather than import, as the dev server caches imported JSON for its whole lifetime
    const meta = JSON.parse(readFileSync(getFilePath("../data/meta.json"), "utf8"));
    return getNotes(meta.author.bluesky);
}

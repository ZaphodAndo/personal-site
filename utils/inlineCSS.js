import { readFileSync } from "node:fs";

/**
 * Combines the content of multiple CSS files into a single string by reading their contents.
 *
 * @param {string[]} filePaths - An array of file paths pointing to the CSS files to be read.
 * @return {string} A single string containing the combined content of all specified CSS files.
 */
export function inlineCSS(filePaths) {
    return filePaths.map((file) => readFileSync(file, "utf8")).join("\n");
}

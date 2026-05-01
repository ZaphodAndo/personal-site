import pluginRss from "@11ty/eleventy-plugin-rss";
import pluginSyntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import loadLanguages from "prismjs/components/index.js";
import "prismjs/plugins/diff-highlight/prism-diff-highlight.js";

loadLanguages(["diff", "typescript", "javascript", "bash", "json", "css"]);

export default function(eleventyConfig) {
    eleventyConfig.setInputDirectory("views");
    eleventyConfig.setIncludesDirectory("../layouts");
    eleventyConfig.setDataDirectory("../data");
    eleventyConfig.addWatchTarget("./css");
    eleventyConfig.addPassthroughCopy("public");
    eleventyConfig.addPassthroughCopy("fonts");
    eleventyConfig.addPlugin(pluginRss);
    eleventyConfig.addPlugin(pluginSyntaxHighlight);
};

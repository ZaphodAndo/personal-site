import pluginRss from "@11ty/eleventy-plugin-rss";

export default function(eleventyConfig) {
    eleventyConfig.setInputDirectory("views");
    eleventyConfig.setIncludesDirectory("../layouts");
    eleventyConfig.setDataDirectory("../data");
    eleventyConfig.addWatchTarget("./css");
    eleventyConfig.addPassthroughCopy("public/favicon.ico");
    eleventyConfig.addPlugin(pluginRss);
};

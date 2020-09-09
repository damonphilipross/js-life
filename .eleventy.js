module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("scripts");
  eleventyConfig.setTemplateFormats([
    "jpg",
    "html",
    "css" // css is not yet a recognized template extension in Eleventy
  ]);
  return {
    pathPrefix: "/js-life-thing/"
  }

};

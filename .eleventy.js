module.exports = eleventyConfig => {
  eleventyConfig.setTemplateFormats([
    'njk',
    'md',
  ]);

  eleventyConfig.addPassthroughCopy('./_headers');
  eleventyConfig.addPassthroughCopy('assets');
  eleventyConfig.addPassthroughCopy('./favicon.ico');
  eleventyConfig.addPassthroughCopy('./favicon-16x16.png');
  eleventyConfig.addPassthroughCopy('./favicon-32x32.png');
  eleventyConfig.addPassthroughCopy('./android-chrome-192x192.png');
  eleventyConfig.addPassthroughCopy('./android-chrome-512x512.png');
  eleventyConfig.addPassthroughCopy('./apple-touch-icon.png');
};

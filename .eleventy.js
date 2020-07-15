module.exports = eleventyConfig => {
  eleventyConfig.setTemplateFormats([
    'njk',
    'md',
  ]);

  eleventyConfig.addPassthroughCopy('./_headers');
  eleventyConfig.addPassthroughCopy('assets');
};

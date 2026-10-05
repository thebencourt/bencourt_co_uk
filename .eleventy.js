const { readFileSync } = require('node:fs');
const path = require('node:path');

module.exports = eleventyConfig => {
  eleventyConfig.setTemplateFormats([
    'njk',
    'md',
  ]);

  const stylesheetPath = path.join(__dirname, 'assets/css/index.css');
  eleventyConfig.addShortcode('inlineCss', () => readFileSync(stylesheetPath, 'utf8'));
  eleventyConfig.addWatchTarget(stylesheetPath);

  eleventyConfig.addPassthroughCopy('./_headers');
  eleventyConfig.addPassthroughCopy('assets');
  eleventyConfig.addPassthroughCopy('./llms.txt');
  eleventyConfig.addPassthroughCopy('./robots.txt');
  eleventyConfig.addPassthroughCopy('./favicon.ico');
  eleventyConfig.addPassthroughCopy('./favicon-16x16.png');
  eleventyConfig.addPassthroughCopy('./favicon-32x32.png');
  eleventyConfig.addPassthroughCopy('./android-chrome-192x192.png');
  eleventyConfig.addPassthroughCopy('./android-chrome-512x512.png');
  eleventyConfig.addPassthroughCopy('./apple-touch-icon.png');
};

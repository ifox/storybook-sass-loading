module.exports = {
  // By default, the entry points tried when loading an addons package are:
  // its `preset` entry, then its `register` entry,
  // and finally, it is assumed that the package itself is a preset.
  // A specific entry point to load a package can also be specified,
  // for example `@storybook/addon-docs/register`
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-actions',
    '@storybook/addon-docs',
    '@storybook/addon-events',
    '@storybook/addon-jest',
    '@storybook/addon-knobs',
    '@storybook/addon-links',
    '@storybook/addon-notes',
    '@storybook/addon-viewport'
  ],
  stories: ['../src/components/**/*.stories.(js|mdx)']
};

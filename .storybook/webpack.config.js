const path = require('path');
const baseConfig = require(path.resolve(__dirname, '../vue.config.js'));

module.exports = async ({ config }) => {
  config.resolve.alias = {
    ...config.resolve.alias, // Storybook internal aliases.
    ...baseConfig.configureWebpack.resolve.alias // Core Library aliased.
  };

  config.module.rules.push({
    test: /\.s?css$/,
    use: ['style-loader', 'css-loader', 'sass-loader'],
    include: path.resolve(__dirname, '../')
  });

  return config;
};

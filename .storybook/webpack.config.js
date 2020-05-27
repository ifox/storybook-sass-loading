const path = require('path');
const baseConfig = require(path.resolve(__dirname, '../vue.config.js'));

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Aliases
  config.resolve.alias = {
    ...config.resolve.alias, // Storybook internal aliases.
    ...baseConfig.configureWebpack.resolve.alias // Core Library aliased.
  };

  config.module.rules.push({
    test: /\.s?css$/,
    use: [
      'style-loader', // Creates `style` nodes from JS strings
      'css-loader', // Translates CSS into CommonJS
      {
        loader: 'sass-loader' // Compiles Sass to CSS
      }
    ],
    include: path.resolve(__dirname, '../')
  });

  // Return the altered config
  return config;
};

const path = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '~components': path.join(__dirname, 'src/components'),
        '~storybook': path.resolve(__dirname, '.storybook/components'),
        styles: path.resolve(__dirname, 'src/styles')
      }
    }
  },
  lintOnSave: true
};

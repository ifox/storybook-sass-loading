import Vue from 'vue';
import { addDecorator, addParameters, configure } from '@storybook/vue';
import { withA11y } from '@storybook/addon-a11y';
import { withTests } from '@storybook/addon-jest';
import theme from './config/theme';
import viewports from './config/viewports';
import StorybookUI from '../src/index.js';
import results from '../jest-test-results.json';

// Add custom theme.
addParameters({
  options: {
    /**
     * display the top-level grouping as a "root" in the sidebar
     * @type {Boolean}
     */
    showRoots: true,
    storySort: (a, b) => {
      // Sort by story 'kind', derived from story 'title', this will correctly
      // order stories into the numbered atomic design hierarchy
      return a[1].kind.localeCompare(b[1].kind, undefined, { numeric: true });
    },
    theme: theme
  },
  viewport: {
    viewports: viewports
  }
});

// Global components
Vue.use(StorybookUI);

// Load all stories inside storybook.
configure(require.context('../src/components', true, /\.stories\.js$/), module);

// Add accessibility addon.
addDecorator(withA11y);

// Add jest addon.
addDecorator(withTests({ results }));

import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import Link from './index.vue';

export default {
  title: 'Atoms/Text Link',
  id: 'atoms/text-link',
  component: Link,
  decorators: [withKnobs],
  parameters: { jest: ['link/index'] }
};

export const primary = () => ({
  components: { Link },
  props: {
    href: {
      default: text('Href', '#')
    },
    text: {
      default: text('Text', 'Link text')
    },
    disabled: {
      default: boolean('Disabled', false)
    },
    ariaLabel: {
      default: text('Aria Label', '')
    }
  },
  template: `
    <div class="f-ui-1">
      <Link
        :href="href"
        :disabled="disabled"
        :aria-label="ariaLabel"
      >
        {{ text }}
      </Link>
    </div>
  `
});

primary.story = {
  name: 'Default',
  parameters: {
    info: {
      components: {
        Link
      }
    }
  }
};

export const subhead = () => ({
  components: { Link },
  props: {
    href: {
      default: text('Href', '#')
    },
    disabled: {
      default: boolean('Disabled', false)
    },
    text: {
      default: text('Text', 'Subhead Link')
    }
  },
  template: `
    <h3 class="f-subhead-3">
      <Link :href="href" :disabled="disabled">{{ text }}</Link>
    </h3>
  `
});

subhead.story = {
  name: 'Subhead',
  parameters: {
    info: {
      components: {
        Link
      }
    }
  }
};

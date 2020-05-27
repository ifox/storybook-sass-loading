import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, text, number } from '@storybook/addon-knobs';
import Button from './index.vue';

export default {
  title: 'Atoms/Button',
  id: 'atoms/button',
  component: Button,
  decorators: [withKnobs],
  parameters: { jest: ['button/index'] }
};

export const textButton = () => ({
  components: { Button },
  props: {
    isDisabled: {
      default: boolean('Disabled', false)
    },
    name: {
      default: text('Name', 'name')
    },
    value: {
      default: text('Value', 'click me')
    },
    type: {
      default: text('Type', 'button')
    },
    tabIndex: {
      default: number('Tab Index', 1)
    }
  },
  methods: {
    action: action('clicked')
  },
  template: `
    <Button
      @click="action"
      :isDisabled="isDisabled"
      :name="name"
      :type="type"
      :value="value"
      :tabIndex="tabIndex">
    </Button>
  `
});

textButton.story = {
  name: 'Text Button',
  parameters: {
    info: {
      components: {
        Button
      }
    }
  }
};

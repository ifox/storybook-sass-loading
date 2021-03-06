import Button from './index.vue';

export default {
  title: 'Atoms/Button',
  id: 'atoms/button',
  component: Button
};

export const textButton = () => ({
  components: { Button },
  template: `
    <Button name="test">Button</Button>
  `
});

textButton.story = {
  name: 'Text Button'
};

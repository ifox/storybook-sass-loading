import Button from './index.vue';

export default {
  title: 'Atoms/Button2',
  id: 'atoms/button2',
  component: Button
};

export const textButton = () => ({
  components: { Button },
  template: `
    <Button name="test">Button</Button>
  `
});

textButton.story = {
  name: 'Text Button2'
};

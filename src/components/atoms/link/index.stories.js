import Link from './index.vue';

export default {
  title: 'Atoms/Text Link',
  id: 'atoms/text-link',
  component: Link
};

export const primary = () => ({
  components: { Link },
  template: `
    <div class="f-ui-1">
      <Link href="https://storybookjs.com">
        Storybook
      </Link>
    </div>
  `
});

primary.story = {
  name: 'Default'
};

export const subhead = () => ({
  components: { Link },
  template: `
    <h3 class="f-subhead-3">
      <Link href="https://storybookjs.com">
        Storybook
      </Link>
    </h3>
  `
});

subhead.story = {
  name: 'Subhead'
};

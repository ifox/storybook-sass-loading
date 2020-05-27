import Button from '~components/atoms/button';
import Link from '~components/atoms/link';

const components = [Button, Link];

components.forEach((component) => {
  component.install = (Vue) => Vue.component(component.name, component);
});

export { Button, Link };

const install = (Vue) => {
  components.map((component) => {
    Vue.component(component.name, component);
  });
};

export default {
  install,
  ...components
};

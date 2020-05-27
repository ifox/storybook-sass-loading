import { shallowMount } from '@vue/test-utils';
import Button from './index.vue';

let clicked = false;
describe('Button', () => {
  const wrapper = shallowMount(Button, {
    propsData: {
      name: 'button',
      eventBindings: {
        click() {
          clicked = true;
        }
      }
    }
  });

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBe(true);
  });

  it('has a button', () => {
    expect(wrapper.contains('button')).toBe(true);
  });

  it('fires an event on click', () => {
    wrapper.find('button').trigger('click');

    expect(clicked).toBeTruthy();
  });
});

import { shallowMount } from '@vue/test-utils';
import Link from './index.vue';

describe('Link', () => {
  const wrapper = shallowMount(Link);

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBe(true);
  });

  it('is an `a` tag', () => {
    expect(wrapper.contains('a')).toBe(true);
  });

  it('has a href', () => {
    const wrapper = shallowMount(Link, {
      propsData: {
        href: 'https://www.getty.edu/'
      }
    });

    expect(wrapper.find('a').attributes().href).toBe('https://www.getty.edu/');
  });

  it('displays text', () => {
    const wrapper = shallowMount(Link, {
      slots: {
        default: 'Link text'
      }
    });

    expect(wrapper.find('.a-link__label').text()).toBe('Link text');
  });

  it('has a aria-label', () => {
    const wrapper = shallowMount(Link, {
      propsData: {
        ariaLabel: 'Getty'
      }
    });

    expect(wrapper.find('a').attributes('aria-label')).toBe('Getty');
  });
});

<template>
  <a
    :href="href"
    :class="classNames"
    :aria-label="ariaLabel ? ariaLabel : false"
    @click="handleClick"
  >
    <span class="a-link__label">
      <slot>{{ ariaLabel }}</slot>
    </span>
  </a>
</template>

<script>
export default {
  name: 'Link',

  props: {
    href: {
      type: String,
      default: '#'
    },
    ariaLabel: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    active: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    classNames() {
      const classes = ['a-link'];

      if (this.active) {
        classes.push('a-link--active');
      }

      if (this.disabled) {
        classes.push('a-link--disabled');
      }

      return classes;
    }
  },

  methods: {
    handleClick(e) {
      e.preventDefault();
    }
  }
};
</script>

<style lang="scss">
@import './index';
</style>

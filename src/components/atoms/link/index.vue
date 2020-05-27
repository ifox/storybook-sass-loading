<template>
  <a
    :href="href"
    :class="classNames"
    :aria-label="ariaLabel ? ariaLabel : false"
    @click="handleClick"
  >
    <span v-if="slotPassed" class="a-link__label">{{ trimSlot }}</span>
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
    },
    trimSlot() {
      return this.slotPassed() ? this.$slots.default[0].text.trim() : '';
    }
  },

  methods: {
    slotPassed() {
      return !!this.$slots.default;
    },
    handleClick(e) {
      e.preventDefault();
    }
  }
};
</script>

<style lang="scss">
@import './index';
</style>

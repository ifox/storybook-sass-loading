<template>
  <button
    ref="button"
    :class="classes"
    :disabled="isDisabled"
    :type="type"
    :name="name"
    :value="value"
    :tab-index="tabIndex"
    v-on="eventBindings"
  >
    <slot>{{ value }}</slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    isDisabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      required: true
    },
    value: {
      type: [String, Number],
      required: false,
      default() {
        return undefined;
      }
    },
    eventBindings: {
      type: Object,
      default() {
        return {};
      }
    },
    type: {
      type: String,
      required: false,
      default: 'button',
      validator(value) {
        return ['button', 'reset', 'submit'].includes(value);
      }
    },
    tabIndex: {
      type: Number,
      required: false,
      default: undefined
    },
    modifiers: {
      type: Array,
      default() {
        return ['text'];
      }
    }
  },

  computed: {
    classes() {
      const classes = ['a-btn'];

      if (this.modifiers) {
        this.modifiers.forEach((item) => {
          classes.push(`a-btn--${item}`);
        });
      }

      return classes;
    }
  }
};
</script>

<style lang="scss">
@import './index';
</style>

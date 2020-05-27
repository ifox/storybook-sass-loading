<template>
  <button :name="name">
    <slot>{{ value }}</slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    name: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss">
@import './index';
</style>

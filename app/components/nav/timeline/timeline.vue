<template>
  <div :class="['nav-timeline', isCenter ? ' is-center' : '']">
    <slot name="timelineitem"></slot>
  </div>
</template>

<script lang="ts" setup>
  defineProps({
    isCenter: {
      type: Boolean,
      required: false,
      default: true,
    },
  });
</script>

<style lang="scss" scoped>
  .nav-timeline {
    display: flex;
    flex-direction: column;
    width: max-content;
    padding-top: 50px;
    padding-bottom: 50px;

    &.is-center {
      margin-left: auto;
      margin-right: auto;
    }
  }
</style>

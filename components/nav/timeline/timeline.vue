<template>
  <div :class="['nav-timeline', isCenter ? ' nav-tl-center' : '', $device.isMobile ? 'nav-tl-mobile' : '']">
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
    max-width: max-content; // TODO: Fix this on mobile
    width: 80vw; // TODO: Fix this on mobile
    padding-top: 3rem;
    padding-bottom: 3rem;

    &.nav-tl-center {
      margin-left: auto;
      margin-right: auto;
    }

    &.nav-tl-mobile {
      padding-top: 0;
    }
  }
</style>
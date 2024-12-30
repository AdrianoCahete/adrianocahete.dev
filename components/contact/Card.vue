<template>
  <div :class="['contact-list', $device.isMobile ? 'contact-mobile' : '']">
    <slot name="contactItem"></slot>
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
  .contact {
    display: flex;
    flex-direction: column;
    max-width: max-content; // TODO: Fix this on mobile
    width: 80vw; // TODO: Fix this on mobile
    padding-top: 3rem;
    padding-bottom: 3rem;

    &.contact-mobile {
      padding-top: 0;
    }
  }
</style>

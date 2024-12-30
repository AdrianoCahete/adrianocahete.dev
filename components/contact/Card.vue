<template>
  <div :class="['contact-list', $device.isMobile ? 'contact-mobile' : '']">
    <slot name="contactItem" />
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
  .contact-list {
    display: flex;
    flex-direction: column;
    padding-top: 3rem;
    padding-bottom: 3rem;

    // &.contact-mobile {
    //   padding-top: 0;
    // }
  }
</style>

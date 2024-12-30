<template>
  <div
    :class="['contact_item', $device.isMobile ? ' contact-mobile' : '']"
  >
  <span>ué</span>
    <UButton
        class="p-2"
        :to="getUrlPerService(service)"
        :target="target"
        :icon="getIconPerService(service)"
        :size="iconSize"
        :aria-label="service"
        color="black"
        variant="ghost"
        :rel="itsMe"
      />
  </div>
</template>

<script lang="ts" setup>
  defineProps({
    service: {
      type: String,
      required: false,
      default: "",
    },
    target: {
      type: String,
      required: false,
      default: "_blank",
      validator: (target: string) => {
        return ['_blank', '_self'].includes(target);
      },
    },
    iconColor: {
      type: String,
      required: false,
    },
    iconSize: {
      type: String as PropType<'sm' | 'md' | 'lg'>,
      required: false,
    },
    variant: {
      type: String,
      required: false,
      default: "ghost",
    },
    itsMe: {
      type: Boolean,
      required: false,
      default: true,
    },
  });

  function getIconPerService(service: string) {
    switch (service) {
      case "linkedin":
        return "i-simple-icons-linkedin";

      case "github":
        return "i-simple-icons-github";

      case "email":
        return "i-simple-icons-gmail";

      case "behance":
        return "i-simple-icons-behance";

      case "resume":
        return "i-simple-icons-whatsapp";

      default:
        return "no-icon";
    }
  }

  function getUrlPerService(service: string) {
    switch (service) {
      case "linkedin":
        return "https://www.linkedin.com/in/AdrianoCahete/";

      case "github":
        return "https://github.com/AdrianoCahete";

      case "email":
        return "me@adrianocahete.dev";

      case "behance":
        return "https://www.behance.net/AdrianoCahete/";

      case "resume":
        return "https://adrianocahete.dev/assets/Adriano_Cahete.pdf";

      default:
        return "no-url";
    }
  }
</script>

<style lang="scss" scoped>
  .contact_item {
    display: flex;
    align-items: center;
    padding: 1rem;

    &:hover {
      border-image: linear-gradient(
        0deg,
        var(--primaryColor) 0%,
        rgb(var(--color-gray-900) / var(--tw-bg-opacity, 1)) 50%,
        var(--primaryColor) 100%
      );
      border-image-slice: 0 0 0 1;
      border-image-width: 1px; // TODO: Get from vars
      border-left-color: transparent;
      transition: border-left-color 0.5s ease-in-out;

      & .contact_item-dot {
        background-color: var(--primaryColor);
        transition: background-color 0.7s ease-in-out;
      }
    }

    // &.contact-mobile {
    // }
  }
</style>

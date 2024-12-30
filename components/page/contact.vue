<template>
  <div class="contact">
    <div>
      <p>You can find me in</p>
      <p class="text-mail text-gradient">me@adrianocahete.dev</p>
      <div class="flex items-center">
        <UIcon name="i-heroicons-map-pin" />
        <p>I'm located in Rio de Janeiro/Brazil</p>
      </div>
    </div>

    <div
      :class="['flex mt-4 text-center contact-list', $device.isMobile ? 'justify-center mx-2' : 'justify-start']"
    >
    <!-- <ContactCard>
      <template #contactItems>
        <ContactItem
          v-for="(contact, index) in contactPoints"
          :key="index"
          :id="index"
          :service="contact.service"
        />
      </template>
    </ContactCard> -->
      <UButton
        class="p-2 contact-item"
        to="https://linkedin.com/in/AdrianoCahete"
        target="_blank"
        icon="i-simple-icons-linkedin"
        aria-label="LinkedIn"
        color="black"
        variant="ghost"
        rel="me"
        size="xl"
      />
      <UButton
        class="p-2"
        to="https://github.com/AdrianoCahete"
        target="_blank"
        icon="i-simple-icons-github"
        aria-label="GitHub"
        color="black"
        variant="ghost"
        rel="me"
        size="xl"
      />
      <UButton
        class="p-2"
        to="https://www.behance.net/AdrianoCahete/"
        target="_blank"
        icon="i-simple-icons-behance"
        aria-label="Behance"
        color="black"
        variant="ghost"
        rel="me"
        size="xl"
      />
      <UButton
        class="p-2"
        to="https://adrianocahete.dev/assets/Adriano_Cahete.pdf"
        target="_blank"
        icon="i-simple-icons-googledocs"
        aria-label="PDF Resume"
        color="black"
        variant="ghost"
        rel="me"
        size="xl"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
const contactPoints = [
    {
      service: "linkedin",
    },
    {
      service: "github",
    },
    {
      service: "behance",
    },
    {
      service: "resume",
    },
  ];
</script>

<style lang="scss" scoped>
.text-mail {
  font-weight: bold;
}

.contact-list {
  .contact-item {
    &:hover {
      & > .iconify {
        transform: scale(1.5);
      }
    }
  }
}
</style>

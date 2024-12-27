<template>
  <div class="contact">
    <p>You can find me in</p>
    <p class="text-mail">me@adrianocahete.dev</p>

    <div class="flex items-center">
      <UIcon name="i-heroicons-map-pin" />
      <p>I'm located in Rio de Janeiro/Brazil</p>
    </div>

    <div
      v-if="$device.isMobile"
      class="flex justify-center items-center mx-2 mt-4 text-center"
    >
      <UButton
        class="p-2"
        to="https://linkedin.com/in/AdrianoCahete"
        target="_blank"
        icon="i-simple-icons-linkedin"
        aria-label="LinkedIn"
        color="black"
        variant="ghost"
      />
      <UButton
        class="p-2"
        to="https://github.com/AdrianoCahete"
        target="_blank"
        icon="i-simple-icons-github"
        aria-label="GitHub"
        color="black"
        variant="ghost"
      />
      <UButton
        class="p-2"
        to="https://www.behance.net/AdrianoCahete/"
        target="_blank"
        icon="i-simple-icons-behance"
        aria-label="Behance"
        color="black"
        variant="ghost"
      />
      <UButton
        class="p-2"
        to="https://adrianocahete.dev/assets/[en-US]-Adriano_Cahete.pdf"
        target="_blank"
        icon="i-simple-icons-googledocs"
        aria-label="PDF Resume"
        color="black"
        variant="ghost"
      />
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.text-mail {
  font-weight: bold;
}
</style>

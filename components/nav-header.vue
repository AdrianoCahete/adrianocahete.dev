<template>
  <UHeader :links="links">
    <template #logo> Adriano Cahete </template>

    <template #right>
      <UColorModeButton color="black" />

      <UButton
        to="https://linkedin.com/in/AdrianoCahete"
        target="_blank"
        icon="i-simple-icons-linkedin"
        aria-label="LinkedIn"
        color="black"
        variant="ghost"
      />
      <UButton
        to="https://github.com/AdrianoCahete"
        target="_blank"
        icon="i-simple-icons-github"
        aria-label="GitHub"
        color="black"
        variant="ghost"
      />
      <UButton
        to="https://www.behance.net/AdrianoCahete/"
        target="_blank"
        icon="i-simple-icons-behance"
        aria-label="Behance"
        color="black"
        variant="ghost"
      />
      <UButton
        to="https://adrianocahete.dev/assets/[en-US]-Adriano_Cahete.pdf"
        target="_blank"
        icon="i-simple-icons-googledocs"
        aria-label="PDF Resume"
        color="black"
        variant="ghost"
      />
    </template>
  </UHeader>
</template>

<script setup>
const links = [
  {
    label: "About",
    to: "#about",
    exactHash: true,
  },
  {
    label: "Work",
    to: "#work",
    exactHash: true,
  },
  {
    label: "Contact",
    to: "#contact",
    exactHash: true,
  },
];
</script>

<style lang="scss">
.header-background-gradient {
  background: var(--navbarBgColor);
  color: #fff;
}

.header-color-text {
  color: #fff;
  font-weight: normal;
}
</style>

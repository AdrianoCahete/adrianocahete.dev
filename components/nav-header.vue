<template>
  <UHeader :links="links">
    <template #logo> Adriano Cahete </template>

    <template #right>
      <UColorModeButton />

      <UButton
        to="https://linkedin.com/in/AdrianoCahete"
        target="_blank"
        icon="i-simple-icons-linkedin"
        aria-label="LinkedIn"
        color="gray"
        variant="ghost"
      />
      <UButton
        to="https://github.com/AdrianoCahete"
        target="_blank"
        icon="i-simple-icons-github"
        aria-label="GitHub"
        color="gray"
        variant="ghost"
      />
      <UButton
        to="https://www.behance.net/AdrianoCahete/"
        target="_blank"
        icon="i-simple-icons-behance"
        aria-label="Behance"
        color="gray"
        variant="ghost"
      />
      <UButton
        to="https://adrianocahete.dev/resume-artifacts/[en-US]-Adriano_Cahete.pdf"
        target="_blank"
        icon="i-simple-icons-file-pdf"
        aria-label="PDF Resume"
        color="gray"
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

<style></style>

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
];

useHead({
  meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }],
  link: [{ rel: "icon", href: "/favicon.ico" }],
  htmlAttrs: {
    lang: "en",
  },
});

const title = "Adriano Cahete";
const description =
  "Nuxt UI Pro is a collection of premium Vue components built on top of Nuxt UI to create beautiful & responsive Nuxt applications in minutes.";

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: "https://ui-pro-starter.nuxt.dev/social-card.png",
  twitterImage: "https://ui-pro-starter.nuxt.dev/social-card.png",
  twitterCard: "summary_large_image",
});
</script>

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
        icon="mdi:file-pdf-box"
        aria-label="PDF Resume"
        color="gray"
        variant="ghost"
      />
    </template>
  </UHeader>

  <UMain>
    <NuxtPage />
  </UMain>

  <UFooter>
    <template #left> Copyright © {{ new Date().getFullYear() }} </template>
  </UFooter>
</template>

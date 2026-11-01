<template>
  <UHeader
    to="/#start"
  >
    <template #title>
      Adriano Cahete
      <DevOnly>[Dev Env]</DevOnly>
    </template>

    <UNavigationMenu :items="links" />

    <template #right>
      <NavColorModeButton />
      <UButton
        to="https://linkedin.com/in/AdrianoCahete"
        target="_blank"
        icon="i-simple-icons-linkedin"
        aria-label="LinkedIn"
        color="neutral"
        variant="ghost"
        class="hidden md:flex"
      />
      <UButton
        to="https://github.com/AdrianoCahete"
        target="_blank"
        icon="i-simple-icons-github"
        aria-label="GitHub"
        color="neutral"
        variant="ghost"
        class="hidden md:flex"
      />
      <UButton
        to="https://www.behance.net/AdrianoCahete/"
        target="_blank"
        icon="i-simple-icons-behance"
        aria-label="Behance"
        color="neutral"
        variant="ghost"
        class="hidden md:flex"
      />
    </template>

    <template #body>
      <UNavigationMenu
        :items="links"
        orientation="vertical"
        class="-mx-2.5"
      />
    </template>
  </UHeader>
</template>

<script setup>
  // import { ref } from "vue";
  // import { vElementVisibility } from "@vueuse/components";

  // // const start = ref(null);
  // const isVisible = ref(false);

  // function onElementVisibility(state) {
  //   isVisible.value = state;
  // }

  const links = [
    {
      label: "About",
      to: "/#about",
      exactHash: true,
      exactActiveClass: "nav-active",
      activeClass: "nav-active",
    },
    {
      label: "Work",
      to: "/#work",
      exactHash: true,
      exactActiveClass: "nav-active",
      activeClass: "nav-active",
    },
    {
      label: "Projects",
      to: "/#projects",
      exactHash: true,
      exactActiveClass: "nav-active",
      activeClass: "nav-active",
    },
    {
      label: "Contact",
      to: "/#contact",
      exactHash: true,
      exactActiveClass: "nav-active",
      activeClass: "nav-active",
    },
  ];

</script>

<style lang="scss">
  .header-background-gradient {
    --ui-text: var(--navColorActive);
    --ui-text-muted: var(--navColor);
    --ui-text-toned: var(--navColorActive);
    --ui-text-highlighted: var(--navColorActive);
    --ui-primary: var(--navColorActive);
    --ui-bg-elevated: rgba(255, 255, 255, 0.14);
    --ui-bg-accented: rgba(255, 255, 255, 0.18);

    background: var(--navbarBgColor);
    color: #fff;
  }

  .header-color-text {
    color: #fff;
    font-weight: normal;
  }
</style>

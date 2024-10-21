<template>
  <section>
    <h2 class="text-subsection">Projects</h2>
    <UPageGrid>
      <ULandingCard
        v-for="(project, index) in projects"
        :key="index"
        :title="project.title"
        :description="project.description"
        :icon="project.icon"
        :to="project.url"
        target="_blank"
      />
    </UPageGrid>
  </section>
  <section>
    <h2 class="text-subsection">Interfaces</h2>
    <UPageGrid>
      <UPageCard
        title="Tailwind CSS"
        description="Add Tailwind CSS to your Nuxt application in seconds with PurgeCSS included for minimal CSS."
        icon="i-simple-icons-tailwindcss"
      />
    </UPageGrid>
  </section>
</template>

<script lang="ts" setup>
  const projects = [
    {
      title: "phpMyAdmin Website",
      description: "Redesign and brand update to phpMyAdmin project",
      icon: "",
      url: "https://github.com/phpmyadmin/website/pull/137",
    },
    {
      title: "Google Chrome Lighthouse",
      description:
        "Automated auditing, performance metrics, and best practices for the web",
      icon: "",
      url: "https://github.com/GoogleChrome/lighthouse/blob/468c10bb9df7ded215b7a3c47e23f48c1af656f7/changelog.md#new-contributors-24",
    },
    {
      title: "RocketChat",
      description:
        "Work as a Product Designer and update stylesheet architecture to meet best practices",
      icon: "",
      url: "https://github.com/GoogleChrome/lighthouse/blob/468c10bb9df7ded215b7a3c47e23f48c1af656f7/changelog.md#new-contributors-24",
    },
  ];
</script>

<style lang="scss">
  .text-subsection {
    margin-bottom: 0.4rem;
    font-size: 1.4rem;
  }
</style>

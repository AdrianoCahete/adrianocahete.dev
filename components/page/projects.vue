<template>
  <section>
    <h2 class="text-subsection">Projects</h2>
    <UPageGrid>
      <UPageCard
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
];
</script>

<style lang="scss">
.text-subsection {
  margin-bottom: 0.4rem;
  font-size: 1.4rem;
}
</style>

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
    <UAlert
      color="sky"
      variant="subtle"
      description="Most UIs created by me over the last years are under a Non-Disclosure
      Agreement, so not everything can be publicly available"
      class="mb-6 mt-4"
    />
    <UPageGrid>
      <ULandingCard
        v-for="(ui, index) in interfaces"
        :key="index"
        :title="ui.title"
        :description="ui.description"
        :icon="ui.icon"
        :to="ui.url"
        target="_blank"
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
      description: "Fixed CLI compatibility problems on windows environment",
      icon: "",
      url: "https://github.com/GoogleChrome/lighthouse/blob/468c10bb9df7ded215b7a3c47e23f48c1af656f7/changelog.md#new-contributors-24",
    },
    {
      title: "RocketChat",
      description:
        "Work as a Product Designer and update stylesheet architecture to meet best practices",
      icon: "",
      url: "https://github.com/RocketChat/Rocket.Chat/",
    },
    {
      title: "Detect.JS",
      description: "Keeping the library updated with the latest browsers",
      icon: "",
      url: "https://github.com/darcyclarke/Detect.js",
    },
    {
      title: "Webfont Generator CLI",
      description:
        "Fixed problems on the original tool, to make sure that will run flawlessly on company pipelines",
      icon: "",
      url: "https://github.com/AdrianoCahete/webfont-generator-cli",
    },
    {
      title: "Better Adrena",
      description:
        "Added styles and js files to create some useful features in Adrenaline Forum",
      icon: "",
      url: "https://github.com/AdrianoCahete/BetterAdrena",
    },
  ];

  const interfaces = [
    {
      title: "phpMyAdmin Website",
      description: "Redesign and brand update to phpMyAdmin project",
      icon: "",
      url: "https://github.com/phpmyadmin/website/pull/137",
    },
    {
      title: "Google Chrome Lighthouse",
      description: "Fixed CLI compatibility problems on windows environment",
      icon: "",
      url: "https://github.com/GoogleChrome/lighthouse/blob/468c10bb9df7ded215b7a3c47e23f48c1af656f7/changelog.md#new-contributors-24",
    },
    {
      title: "RocketChat",
      description:
        "Work as a Product Designer and update stylesheet architecture to meet best practices",
      icon: "",
      url: "https://github.com/RocketChat/Rocket.Chat/",
    },
    {
      title: "Detect.JS",
      description: "Keeping the library updated with the latest browsers",
      icon: "",
      url: "https://github.com/darcyclarke/Detect.js",
    },
    {
      title: "Webfont Generator CLI",
      description:
        "Fixed problems on the original tool, to make sure that will run flawlessly",
      icon: "",
      url: "https://github.com/darcyclarke/Detect.js",
    },
    {
      title: "Better Adrena",
      description:
        "Added styles and js files to create some useful features in Adrenaline Forum",
      icon: "",
      url: "https://github.com/AdrianoCahete/AdrenalineLight",
    },
  ];
</script>

<style lang="scss">
  .text-subsection {
    margin-bottom: 0.4rem;
    font-size: 1.4rem;
  }
</style>

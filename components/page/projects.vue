<template>
  <section>
    <h2 class="text-subsection">Projects</h2>
    <UPageGrid>
      <ULandingCard
        v-for="(project, index) in projects"
        :key="index"
        :title="project.title"
        :description="project.description"
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
      url: "https://github.com/phpmyadmin/website/pull/137",
    },
    {
      title: "Google Chrome Lighthouse",
      description: "Fixed CLI compatibility problems on windows environment",
      url: "https://github.com/GoogleChrome/lighthouse/blob/468c10bb9df7ded215b7a3c47e23f48c1af656f7/changelog.md#new-contributors-24",
    },
    {
      title: "RocketChat",
      description:
        "Work as a Product Designer and update stylesheet architecture to meet best practices",
      url: "https://github.com/RocketChat/Rocket.Chat/",
    },
    {
      title: "Detect.JS",
      description: "Keeping the library updated with the latest browsers",
      url: "https://github.com/darcyclarke/Detect.js",
    },
    {
      title: "Webfont Generator CLI",
      description:
        "Fixed problems on the original tool, to make sure that will run flawlessly on company pipelines",
      url: "https://github.com/AdrianoCahete/webfont-generator-cli",
    },
    {
      title: "Better Adrena",
      description:
        "Added styles and js files to create some useful features in Adrenaline Forum",
      url: "https://github.com/AdrianoCahete/BetterAdrena",
    },
  ];

  const interfaces = [
    {
      title: "phpMyAdmin Brand Refresh",
      description: "Design for Open Source: phpMyAdmin Brand Refresh",
      url: "https://adrianocahete.medium.com/design-for-opensource-phpmyadmin-8b0bd8b800d3",
    },
    {
      title: "Integrated Command & Control Center",
      description: "",
      url: "",
    },
    {
      title: "Risk Intelligence",
      description:
        "In the start, the PowerBI interface was pretty basic, so we come to a way to create our own on tpop of that.",
      url: "https://www.behance.net/gallery/99975665/Risk-Intelligence-20172019",
    },
    {
      title: "Risk Heat Map",
      description:
        "The goal is to have a Risk Heat Map component that the client can customize the range of names, colors, values, and axis values. The end-user needs to have an ability to click on each cell and filter for that type of risks.",
      url: "https://www.behance.net/gallery/96780423/Risk-Heat-Map-2018",
    },
    {
      title: "SAI360 Digital Risk Login | 2012 - 2016",
      description:
        "Keep the Login page visually up to date, to show that the product is always evolving",
      url: "https://www.behance.net/gallery/94434203/Modulo-RiskManager-Login-(Sign-in)-Portal-2012-2016",
    },
    {
      title: "SAI360 Digital Risk Login | 2016 - 2018",
      description:
        "Keep the Login page visually up to date, to show that the product is always evolving",
      url: "https://www.behance.net/gallery/94559463/SAI360-Digital-Risk-Login-(Sign-in)-Portal-2016-2018",
    },
    {
      title: "Survey Anonymous Portal",
      url: "https://www.behance.net/gallery/95161793/Survey-Anonymous-Portal-2019",
    },
    {
      title: "Software do Bem",
      description:
        "Software do Bem (en.: Good Software) is an Open Source initiative that aims to be a marketplace to be the bridge between the philanthropic institutions and the volunteers",
      url: "https://www.behance.net/gallery/106491447/Software-do-Bem",
    },
  ];
</script>

<style lang="scss">
  .text-subsection {
    margin-bottom: 0.4rem;
    font-size: 1.4rem;
  }
</style>

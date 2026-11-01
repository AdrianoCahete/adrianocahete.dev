<template>
  <section>
    <h3 class="text-subsection">Projects</h3>
    <UPageGrid>
      <UPageCard
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
    <h3 class="text-subsection">Interfaces</h3>
    <UAlert
      color="info"
      variant="subtle"
      description="Most UIs created by me over the last years are under a Non-Disclosure
      Agreement, so not everything can be publicly available"
      class="mb-6 mt-4"
    />
    <UPageGrid>
      <UPageCard
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
  import { projects, interfaces } from "~/lib/portfolio";
</script>

<style lang="scss">
  .text-subsection {
    margin-bottom: 0.4rem;
    font-size: 1.4rem;
  }
</style>

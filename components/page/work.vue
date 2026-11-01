<template>
  <UTimeline
    :items="timelineItems"
    color="secondary"
    :default-value="timelineItems[0]?.value"
    size="2xs"
    orientation="vertical"
    reverse
    class="w-full max-w-3xl mx-auto"
  />
</template>

<script lang="ts" setup>
  import type { TimelineItem } from "@nuxt/ui";

  import { workplaces } from "~/lib/portfolio";

  const timelineItems = workplaces.map((work) => ({
    value: `${work.companyName}-${work.startsOn}`,
    date: `${work.startsOn} - ${work.endsOn}`,
    title: work.jobName,
    description: work.companyName,
    // icon: "i-heroicons-briefcase",
  })) satisfies TimelineItem[];
</script>

<template>
  <ULandingCard
    :title="jobName"
    :description="companyName"
    color="primary"
    orientation="vertical"
    class="work-card"
  >
    <template #icon>
      <UAvatar
        src="https://avatars.githubusercontent.com/u/739984?v=4"
        :alt="companyName"
      />
    </template>

    <template #default>
      <div class="work-card_content">{{ startsOn }} - {{ endsOn }}</div>

      <div v-if="projectName" class="work-card_footer">
        <NuxtLink :to="`/project/${projectName}`">
          {{ projectName }}
        </NuxtLink>
      </div>
    </template>
  </ULandingCard>
</template>

<script lang="ts" setup>
defineProps({
  companyName: {
    type: String,
    required: true,
  },
  jobName: {
    type: String,
    required: true,
  },
  startsOn: {
    // TODO: move to date format (MMYYYY)
    type: String,
    required: true,
  },
  endsOn: {
    // TODO: move to date format
    type: String,
    default: "present",
  },
  projectName: {
    type: String,
    default: null,
  },
});
</script>

<style lang="scss">
.work-card {
  .work-card_footer {
    border-top: 1px solid #ccc;
    padding-top: 1rem;
  }
}

.landing-card-container {
  background-color: red;
}
</style>

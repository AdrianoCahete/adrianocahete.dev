<template>
  <ULandingCard
    :key="stringNormalize(companyName)"
    :id="stringNormalize(companyName)"
    :title="jobName"
    :description="companyName"
    color="primary"
    orientation="vertical"
    class="work-card"
  >
    <template v-if="companyLogo" #icon>
      <UAvatar :alt="companyName" :title="companyName" />
    </template>

    <template #title>
      <p class="text-gray-900 dark:text-white text-base font-bold text-wrap">
        {{ jobName }}
      </p>
    </template>
    <template #description>
      <p class="text-[15px] text-gray-500 dark:text-gray-400 mt-1 font-medium">
        {{ companyName }}
      </p>
    </template>

    <div class="work-card_content text-[14px] text-gray-500 dark:text-gray-400">
      {{ startsOn }} - {{ endsOn }}
    </div>

    <div v-if="projectName" class="work-card_footer">
      <NuxtLink :to="`/project/${projectName}`" class="work-card_link">
        {{ projectName }}
      </NuxtLink>
    </div>
  </ULandingCard>
</template>

<script lang="ts" setup>
defineProps({
  companyName: {
    type: String,
    required: true,
  },
  companyLogo: {
    type: String,
    default: null,
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
    default: "",
  },
});

// function getCompanyLogo(companyName: string) {
//   return companyName.toLowerCase().split(" ").join("-");
// }

function stringNormalize(companyName: string) {
  const companyKey = `${companyName.toLowerCase().split(" ").join("-")}`;
  return companyKey;
}
</script>

<style lang="scss">
.work-card {
  cursor: default;

  .landing-card-body {
    justify-content: space-between;
  }

  .work-card_footer {
    border-top: 1px solid #ccc;
    padding-top: 1rem;
    text-align: right;

    .work-card_link {
      text-decoration: underline;
    }
  }
}
</style>

<template>
  <div
    class="nav-timeline_item"
    :key="stringNormalize(companyName)"
    :id="stringNormalize(companyName, Index)"
  >
    <div class="nav-timeline_item-dot"></div>
    <ULandingCard
      :title="jobName"
      :description="companyName"
      color="primary"
      orientation="vertical"
    >
      <template
        v-if="companyLogo"
        #icon
      >
        <UAvatar
          :alt="companyName"
          :title="companyName"
        />
      </template>
      <template #title>
        <p class="text-gray-900 dark:text-white text-base font-bold text-wrap">
          {{ jobName }}
        </p>
      </template>
      <template #description>
        <p
          class="text-[15px] text-gray-500 dark:text-gray-400 mt-1 font-medium"
        >
          {{ companyName }}
        </p>
      </template>
      <div
        class="work-card_content text-[14px] text-gray-500 dark:text-gray-400"
      >
        {{ startsOn }} - {{ endsOn }}
      </div>
      <div
        v-if="projectName"
        class="work-card_footer"
      >
        <NuxtLink
          :to="`/project/${projectName}`"
          class="work-card_link"
        >
          {{ projectName }}
        </NuxtLink>
      </div>
    </ULandingCard>
  </div>
</template>

<script lang="ts" setup>
  defineProps({
    Index: {
      type: Number,
      required: false,
    },
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

  function stringNormalize(companyName: string, index: number = -1) {
    const companyKey =
      index > -1
        ? `${companyName.toLowerCase().split(" ").join("-")}-${index}`
        : `${companyName.toLowerCase().split(" ").join("-")}`;

    return companyKey;
  }
</script>

<style lang="scss" scoped>
  .nav-timeline_item {
    display: flex;
    align-items: center;
    padding-left: 50px;
    padding-bottom: 1rem;
    border-left: 1px solid var(--primaryColor); // TODO: Get from vars
    border-image: none;

    &:first-of-type {
      padding-top: 3rem;
    }

    &:last-of-type {
      padding-bottom: 2.5rem;
    }

    .nav-timeline_item-dot {
      background-color: var(--pageBackground-base);
      border: 2px solid var(--primaryColor); // TODO: Get from vars (border-image-width * 2)
      width: 30px;
      height: 30px;
      border-radius: 50%;
      margin-left: -65px; // TODO: Math: -(margin-right + width/2)
      margin-right: 50px; // TODO: Get from padding-left from timeline-item
      transition: background-color 0.5s ease-in-out;
    }

    &:hover {
      border-image: linear-gradient(
        0deg,
        var(--primaryColor) 0%,
        rgb(var(--color-gray-900) / var(--tw-bg-opacity, 1)) 50%,
        var(--primaryColor) 100%
      );
      border-image-slice: 0 0 0 1;
      border-image-width: 1px; // TODO: Get from vars
      border-left-color: transparent;
      transition: border-left-color 0.5s ease-in-out;

      & .nav-timeline_item-dot {
        background-color: var(--primaryColor);
        transition: background-color 0.7s ease-in-out;
      }
    }
  }

  .dark .nav-timeline_item-dot {
    background-color: var(--pageBackground-dark);
  }
</style>

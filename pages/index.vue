<template>
  <ULandingHero
    id="start"
    class="landing-hero-start snap-start"
    ref="start"
  >
    <template #title>
      <InspiraTextEffect
        v-if="$device.isDesktop"
        text="Adriano Cahete"
      />
      <div
        v-else
        class="text-5xl"
      >
        Adriano Cahete
      </div>
    </template>

    <template #description>
      <span class="landing-description">
        I am a
        <strong>FrontEnd Developer</strong>,
        <strong>Design Technologist</strong> &
        <strong>DesignOps</strong>
      </span>
    </template>
  </ULandingHero>

  <ULandingSection
    id="about"
    title="About"
    class="snap-start"
    :style="
      $device.isDesktop
        ? ''
        : 'padding-top: calc(var(--header-height) + 1.5rem);'
    "
  >
    <PageAbout />
  </ULandingSection>

  <ULandingSection
    id="work"
    title="Work Experience"
    class="snap-start"
    :style="
      $device.isDesktop
        ? ''
        : 'padding-top: calc(var(--header-height) + 1.5rem);'
    "
  >
    <PageWork />
  </ULandingSection>

  <ULandingSection
    id="projects"
    title="Projects"
    class="snap-start"
    :style="
      $device.isDesktop
        ? ''
        : 'padding-top: calc(var(--header-height) + 1.5rem);'
    "
  >
    <PageProjects />
  </ULandingSection>

  <ULandingSection
    id="contact"
    title="Contact"
    class="snap-start"
    :style="
      $device.isDesktop
        ? ''
        : 'padding-top: calc(var(--header-height) + 1.5rem);'
    "
  >
    <PageContact />
  </ULandingSection>
</template>

<style lang="scss">
  .landing-hero-start {
    align-items: center;
    display: flex;
    height: calc(100dvh - var(--header-height));
  }

  .landing-description {
    opacity: 0.8;
    transition: opacity 0.5s ease-in-out;
  }
</style>

<script setup>
  const start = ref(null);
</script>

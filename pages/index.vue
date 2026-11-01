<template>
  <main>
    <h1 class="sr-only">Adriano Cahete</h1>
    <UPageHero
      id="start"
      ref="start"
      :as="{ title: 'div' }"
      class="landing-hero-start snap-start font-sans"
    >
      <template #title>
        <InspiraTextEffect
          text="Adriano Cahete"
          aria-hidden="true"
          class="hidden lg:block"
        />
        <div
          aria-hidden="true"
          class="text-5xl lg:hidden"
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
    </UPageHero>
    <UPageSection
      id="about"
      title="About"
      class="snap-start portfolio-section"
    >
      <PageAbout />
    </UPageSection>
    <UPageSection
      id="work"
      title="Work Experience"
      class="snap-start portfolio-section"
    >
      <PageWork />
    </UPageSection>
    <UPageSection
      id="projects"
      title="Projects"
      class="snap-start portfolio-section"
    >
      <PageProjects />
    </UPageSection>
    <UPageSection
      id="contact"
      title="Contact"
      class="snap-start portfolio-section"
    >
      <PageContact />
    </UPageSection>
  </main>
</template>

<script setup>
  import { profile, profileSchema } from "~/lib/profile";

  const start = ref(null);

  useSeoMeta({ ogUrl: profile.url });
  useHead({
    link: [{ rel: "canonical", href: profile.url }],
    script: [{
      key: "profile-schema",
      type: "application/ld+json",
      textContent: JSON.stringify(profileSchema).replace(/</g, "\\u003c"),
    }],
  });
</script>

<style lang="scss">
  @media (width < 1024px) {
    .portfolio-section {
      padding-top: calc(var(--ui-header-height) + 1.5rem);
    }
  }

  .landing-hero-start {
    align-items: center;
    display: flex;
    height: calc(100dvh - var(--ui-header-height));
  }

  .landing-description {
    opacity: 0.8;
    transition: opacity 0.5s ease-in-out;
  }
</style>

<template>
  <div>
    <ULandingHero title="Adriano Cahete" class="landing-hero-start">
      <template #description>
        <span class="landing-description">
          I am a
          <strong>FrontEnd Developer, Design Technologist & DesignOps</strong>
        </span>
      </template>
    </ULandingHero>

    <ULandingSection id="about" title="About">
      <PageAbout />
    </ULandingSection>

    <ULandingSection id="work" title="Work Experience">
      <PageWork />
    </ULandingSection>

    <ULandingSection id="projects" title="Projects">
      <PageProjects />
    </ULandingSection>

    <ULandingSection id="contact" title="Contact">
      <PageContact />
    </ULandingSection>
  </div>
</template>

<style lang="scss">
.landing-hero-start {
  align-items: center;
  display: flex;
  height: calc(80vh - var(--header-height));
}

.landing-description {
  opacity: 0.6;
  transition: opacity 0.5s ease-in-out;
}
</style>

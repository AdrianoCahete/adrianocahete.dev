<template>
  <div>
    <ULandingHero
      title="Adriano Cahete"
      description="I am a FrontEnd Developer, Design Technologist & DesignOps"
      class="landing-hero-start"
    />

    <ULandingSection id="about" title="About">
      <PageAbout />
    </ULandingSection>

    <ULandingSection id="work" title="Work">
      <PageWork />
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
</style>

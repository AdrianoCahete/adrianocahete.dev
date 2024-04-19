<template>
  <div>
    <ULandingHero
      title="Adriano Cahete"
      description="I am a FrontEnd Developer, Design Technologist & DesignOps"
    />

    <ULandingSection id="about" title="About">
      <template #description>
        Nuxt UI Pro ships with an extensive set of advanced components that
        cover a wide range of use-cases.<br />
        Carefully crafted to reduce boilerplate code without sacrificing
        flexibility.
      </template>
      <PageAbout />
    </ULandingSection>

    <ULandingSection id="work" title="Work">
      <UPageGrid>
        <PageWork />
      </UPageGrid>
    </ULandingSection>
  </div>
</template>

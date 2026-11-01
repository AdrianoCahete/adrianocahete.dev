<template>
  <div class="about-me">
    <p>
      I'm <strong>Adriano Cahete</strong>, a
      <strong>Design Technologist & DesignOps</strong> from Brazil.
    </p>
    <p>
      I work across multiple product design areas, such as interaction, motion,
      UX, and UI,
      <strong>
        with more than {{ new Date().getFullYear() - 2010 }} years of experience
      </strong>
      in the field, in companies in Netherlands, US and Brazil.
    </p>

    <p>
      My core competencies include designing and developing digital products,
      using React/Nuxt/Vue, that meet the needs and expectations of users and
      clients. I also specialize in bridging the gap between designers and
      developers, creating a better design/developer experience (DX) and
      implementing DesignOps and GitOps practices.
    </p>

    <section
      id="profile-questions"
      aria-labelledby="profile-questions-title"
      class="mt-8 scroll-mt-24 border-t border-default pt-6 hidden"
    >
      <h3 id="profile-questions-title" class="text-lg font-semibold text-highlighted">
        Profile questions
      </h3>
      <dl class="mt-4 grid gap-6 sm:grid-cols-2">
        <div v-for="question in profileQuestions" :key="question.id">
          <dt :id="`question-${question.id}`" class="scroll-mt-24 font-medium text-highlighted">
            {{ question.question }}
          </dt>
          <dd class="mt-1 text-sm text-muted">
            {{ question.answer }}
            <a
              v-if="question.link"
              :href="question.link.href"
              target="_blank"
              rel="me noopener noreferrer"
              class="text-primary underline underline-offset-4"
            >
              View {{ question.link.title }} profile
            </a>
          </dd>
        </div>
      </dl>
    </section>
  </div>
</template>

<script lang="ts" setup>
  import { profileQuestions } from "~/lib/profile";
</script>

<style lang="scss" scoped>
.about-me > p {
  margin-bottom: 1ch;
}
</style>

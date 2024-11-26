<template>
  <UFooter>
    <template #left>
      Last update: {{ new Date().getFullYear() }}.{{
        new Date().getMonth() + 1
      }}
      <span v-if="$config.public.version">- v{{ $config.public.version }}</span>
    </template>
    <template #right> Made with Nuxt 3 + Tailwind </template>
  </UFooter>
</template>

<script lang="ts" setup></script>

<style scoped>
  footer {
    font-size: 1.2rem;
  }
</style>

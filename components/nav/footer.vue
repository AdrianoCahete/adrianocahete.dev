<template>
  <UFooter class="footer">
    <template #left>
      Last update: {{ new Date().getFullYear() }}.{{
        new Date().getMonth() + 1
      }}
      <span v-if="$config.public.version">- v{{ $config.public.version }}</span>
    </template>
    <template #right>
      Made with <span class="spotlight text-gradient">Nuxt</span> + <span class="spotlight text-gradient">NuxtUI Pro</span> + <span class="spotlight text-gradient">Tailwind</span>
    </template>
  </UFooter>
</template>

<script lang="ts" setup></script>

<style scoped>
  footer {
    font-size: 0.8rem;
  }

  .spotlight {
    font-weight: bold;
  }
</style>

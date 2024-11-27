<template>
  <UFooter class="footer">
    <template #left>
      Last update: {{ new Date().getFullYear() }}.{{
        new Date().getMonth() + 1
      }}
      <span v-if="$config.public.version">- v{{ $config.public.version }}</span>
    </template>
    <template #right>
      Made with <span class="spotlight text-gradient">Nuxt</span>
      <span class="strike">3</span>
      <span class="spotlight text-gradient">4</span> + NuxtUI Pro + Tailwind
    </template>
  </UFooter>
</template>

<script lang="ts" setup></script>

<style scoped>
  footer {
    font-size: 0.8rem;
  }

  .strike {
    text-decoration: line-through;
    color: #8b8b8b;
  }

  .spotlight {
    font-weight: bold;
  }
</style>

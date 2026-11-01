<template>
  <UFooter class="footer">
    <template #left>
      Last update: {{ new Date().getFullYear() }}.{{
        new Date().getMonth() + 1
      }}
      <span v-if="$config.public.pkgVersion">- v{{ $config.public.pkgVersion }}</span>
    </template>
    <template #right>
      Made with <span class="spotlight text-gradient">Nuxt 4</span> + <span class="spotlight text-gradient">Nuxt UI</span> + <span class="spotlight text-gradient">Tailwind</span>
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

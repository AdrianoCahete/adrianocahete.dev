<template>
  <UFooter>
    <template #left>
      Last update: {{ new Date().getFullYear() }}.{{
        new Date().getMonth() + 1
      }}
      <span v-if="$config.public.version">- v{{ $config.public.version }}</span>
    </template>
  </UFooter>
</template>

<script lang="ts" setup></script>

<style></style>

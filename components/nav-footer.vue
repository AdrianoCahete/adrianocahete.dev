<template>
  <UFooter>
    <template #left>
      Last update: {{ new Date().getFullYear() }}.{{
        new Date().getMonth() + 1
      }}
      - v{{ pkg.public.version }}
    </template>
  </UFooter>
</template>

<script lang="ts" setup>
const pkg = useRuntimeConfig();
</script>

<style></style>

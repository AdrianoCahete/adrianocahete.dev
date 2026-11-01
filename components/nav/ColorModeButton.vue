<template>
  <UButton
    color="neutral"
    variant="ghost"
    :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
    :disabled="changing"
    @click="toggleTheme"
  >
    <UIcon name="i-heroicons-sun" class="size-5 dark:hidden" />
    <UIcon name="i-heroicons-moon" class="hidden size-5 dark:inline-block" />
  </UButton>
</template>

<script setup lang="ts">
  const colorMode = useColorMode();
  const changing = useState("theme-reveal-running", () => false);
  const mounted = ref(false);
  const isDark = computed(() => mounted.value && colorMode.value === "dark");
  onMounted(() => { mounted.value = true; });

  async function toggleTheme(event: MouseEvent) {
    if (changing.value) return;
    const nextMode = colorMode.value === "dark" ? "light" : "dark";
    const updateTheme = async () => {
      colorMode.preference = nextMode;
      await nextTick();
    };

    if (!document.startViewTransition || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      await updateTheme();
      return;
    }

    const button = event.currentTarget as HTMLElement;
    const rect = button.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const radius = Math.ceil(Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y)));
    const root = document.documentElement;
    changing.value = true;
    root.dataset.themeReveal = "active";
    root.style.setProperty("--theme-reveal-x", `${x}px`);
    root.style.setProperty("--theme-reveal-y", `${y}px`);
    root.style.setProperty("--theme-reveal-radius", `${radius}px`);

    try {
      const transition = document.startViewTransition(updateTheme);
      await transition.finished;
    } catch {
      await updateTheme();
    } finally {
      delete root.dataset.themeReveal;
      for (const property of ["--theme-reveal-x", "--theme-reveal-y", "--theme-reveal-radius"]) {
        root.style.removeProperty(property);
      }
      changing.value = false;
    }
  }
</script>

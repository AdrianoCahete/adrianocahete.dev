// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ["@nuxt/ui-pro"],
  modules: ["@vueuse/nuxt", "@nuxt/ui", "@nuxtjs/google-fonts"],

  ui: {
    icons: ["heroicons", "simple-icons"],
  },

  devtools: {
    enabled: true,
  },

  compatibilityDate: "2024-07-27",
});

// https://nuxt.com/docs/api/configuration/nuxt-config
import pkg from "./package.json";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // https://nuxt.com/docs/getting-started/upgrade#opting-in-to-nuxt-4
  // future: {
  //   compatibilityVersion: 4,
  // },

  extends: ["@nuxt/ui-pro"],
  modules: [
    "@nuxt/ui",
    "@nuxt/eslint",
    "@vueuse/nuxt",
    "@vueuse/motion/nuxt",
    "@nuxt/fonts",
    "@nuxtjs/device",
    "@nuxt/content",
  ],

  router: {
    options: {
      scrollBehaviorType: "smooth",
    },
  },

  colorMode: {
    preference: "light",
  },

  // content: {
  //   // ... options
  // },

  // vite: {
  //   css: {
  //     preprocessorOptions: {
  //       scss: {
  //         api: "modern-compiler",
  //       },
  //     },
  //   },
  // },

  runtimeConfig: {
    // Private keys are only available on the server
    // apiSecret: '',

    // Public keys that are exposed to the client
    public: {
      pkgVersion: pkg.version,
    },
  },

  devtools: { enabled: true },
  compatibilityDate: "2024-12-25",
});

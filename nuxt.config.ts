// https://nuxt.com/docs/api/configuration/nuxt-config
import pkg from "./package.json";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // https://nuxt.com/docs/getting-started/upgrade#opting-in-to-nuxt-4
  future: {
    compatibilityVersion: 4,
  },

  extends: ["@nuxt/ui-pro"],
  devtools: { enabled: true },
  modules: ["@nuxt/ui"],

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

  compatibilityDate: "2024-12-25",
});
// https://nuxt.com/docs/api/configuration/nuxt-config
import pkg from "./package.json";

export default defineNuxtConfig({
  extends: ["@nuxt/ui-pro"],
  modules: ["@vueuse/nuxt", "@nuxt/ui", "@nuxtjs/google-fonts"],

  runtimeConfig: {
    // Private keys are only available on the server
    // apiSecret: '',

    // Public keys that are exposed to the client
    public: {
      pkgVersion: pkg.version,
    },
  },

  ui: {
    icons: ["heroicons", "simple-icons"],
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
        },
      },
    },
  },

  devtools: {
    enabled: true,
  },

  compatibilityDate: "2024-07-27",
});

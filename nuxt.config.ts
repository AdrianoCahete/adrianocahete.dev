// https://nuxt.com/docs/api/configuration/nuxt-config
import pkg from "./package.json";

export default defineNuxtConfig({
  // https://nuxt.com/docs/getting-started/upgrade#opting-in-to-nuxt-4
  future: {
    compatibilityVersion: 4,
  },
  extends: ["@nuxt/ui-pro"],
  modules: [
    "@vueuse/nuxt",
    "@nuxt/ui",
    "@vueuse/motion/nuxt",
    "@nuxt/fonts",
    "@nuxtjs/device",
  ],

  colorMode: {
    preference: "light",
  },

  runtimeConfig: {
    // Private keys are only available on the server
    // apiSecret: '',

    // Public keys that are exposed to the client
    public: {
      pkgVersion: pkg.version,
    },
  },

  // i18n: {
  //   locales: [
  //     { code: "en", iso: "en-US", dir: "ltr" },
  //     // { code: 'br', iso: 'pt-BR', dir: 'ltr' },
  //   ],
  //   fallbackLocale: "en",
  //   disablePageLocales: true,
  //   defaultLocale: "en",
  //   translationDir: "locales",
  //   meta: false,
  // },

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
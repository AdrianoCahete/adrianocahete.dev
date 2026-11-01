// https://nuxt.com/docs/api/configuration/nuxt-config
import pkg from "./package.json";
import { profile, profileQuestions } from "./lib/profile";

export default defineNuxtConfig({
  srcDir: ".",
  modules: [
    "@vueuse/nuxt",
    "@nuxt/ui",
    "@vueuse/motion/nuxt",
    "@nuxtjs/device",
    "@nuxtjs/robots",
    "@nuxtjs/sitemap",
    "nuxt-llms",
    "nuxt-site-config",
  ],

  site: {
    url: profile.url,
    name: profile.name,
    description: profile.description,
    defaultLocale: "en",
  },

  robots: {
    allow: ["/"],
    blockAiBots: false,
  },

  sitemap: {
    exclude: ["/admin", "/admin/**"],
  },

  routeRules: {
    "/admin": { robots: false, sitemap: false },
    "/admin/**": { robots: false, sitemap: false },
  },

  llms: {
    domain: profile.url,
    title: profile.name,
    description: profile.description,
    full: {
      title: "Detailed portfolio",
      description: "Profile, professional experience, projects and answers to common questions.",
    },
    sections: [
      {
        title: "Portfolio",
        description: "Adriano works across frontend development, interaction design, motion, UX and UI, bridging design and development through DesignOps and GitOps practices.",
        links: [
          { title: "About", href: `${profile.url}#about`, description: "Professional background, skills and approach to building digital products." },
          { title: "Profile questions", href: `${profile.url}#profile-questions`, description: "Direct answers about specialties, technologies, location and contact." },
          { title: "Work Experience", href: `${profile.url}#work`, description: "Career history with roles, employers and employment periods, starting with the most recent position." },
          { title: "Projects and Interfaces", href: `${profile.url}#projects`, description: "Open source contributions, frontend projects and public interface design work." },
          { title: "Contact", href: `${profile.url}#contact`, description: "Public professional profiles. Use LinkedIn to get in touch." },
        ],
      },
      {
        title: "Quick answers",
        description: profileQuestions.map(({ question, answer }) => `### ${question}\n\n${answer}`).join("\n\n"),
      },
      {
        title: "Professional profiles",
        links: profile.profiles,
      },
    ],
  },

  css: ["~/assets/css/main.css"],

  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
    },
  },

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

  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },

  compatibilityDate: "2024-07-27",
});

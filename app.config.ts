export default defineAppConfig({
  ui: {
    primary: "sky",
    gray: "slate",

    landing: {
      card: {
        wrapper: "landing-card-wrapper",
        container: "landing-card-container",
        body: {
          base: "landing-card-body",
        },
      },
      section: {
        title:
          "text-3xl font-bold tracking-tight dark:text-white sm:text-4xl lg:text-5xl text-gradient",
      },
      hero: {
        title:
          "text-5xl font-bold tracking-tight dark:text-white sm:text-7xl text-gradient-main",
      },
    },

    header: {
      wrapper:
        "header-background-gradient backdrop-blur border-b border-gray-200 dark:border-gray-800 -mb-px sticky top-0 z-50",
      logo: "header-color-text flex-shrink-0 text-xl dark:text-white flex items-end gap-1.5",
      button: {
        base: "header-color-text lg:hidden",
      },
    },
  },
  googleFonts: {
    download: true,
    preload: true,

    families: {
      Roboto: true,
      Inter: "200..700",
    },
  },
});

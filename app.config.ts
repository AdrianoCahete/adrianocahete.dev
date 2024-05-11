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
  },
  googleFonts: {
    download: true,
    preload: true,

    families: {
      Roboto: true,
      "Josefin+Sans": true,
      Lato: [100, 300],
      Raleway: {
        wght: [100, 400],
        ital: [100],
      },
      Inter: "200..700",
      "Crimson Pro": {
        wght: "200..900",
        ital: "200..700",
      },
    },
  },
});

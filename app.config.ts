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
          "text-3xl font-bold tracking-tight dark:text-gradient sm:text-4xl lg:text-5xl text-gradient",
        container: "gap-12 sm:gap-y-12 flex flex-col",
      },
      hero: {
        container: "gap-16 sm:gap-y-24 flex flex-col max-w-full",
        title:
          "text-8xl font-bold tracking-tight sm:text-7xl text-gradient-main",
        description:
          "mt-2 text-lg tracking-tight text-gray-600 dark:text-gray-300",
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
});

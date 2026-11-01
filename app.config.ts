export default defineAppConfig({
  ui: {
    colors: {
      primary: "sky",
      neutral: "slate",
    },
    icons: {
      menu: "i-heroicons-bars-3",
      close: "i-heroicons-x-mark",
      light: "i-heroicons-sun",
      dark: "i-heroicons-moon",
    },
    pageCard: {
      slots: {
        root: "landing-card-wrapper",
        container: "landing-card-container",
        body: "landing-card-body",
      },
    },
    pageSection: {
      slots: {
        container: "pt-12 pb-4 sm:py-32 gap-12 sm:gap-y-12 flex flex-col lg:flex",
        title: "text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-gradient",
      },
    },
    pageHero: {
      slots: {
        container: "w-auto gap-16 sm:gap-y-24 flex flex-col lg:flex max-w-full",
        title: "text-8xl font-bold tracking-tight sm:text-7xl text-gradient-main drop-shadow-custom",
        description: "mt-2 text-lg/7 sm:text-lg/7 tracking-tight text-muted",
      },
      compoundVariants: [{
        title: true,
        class: { description: "mt-2 text-wrap" },
      }],
    },
    header: {
      slots: {
        root: "header-background-gradient",
        header: "header-background-gradient",
        title: "header-color-text shrink-0 text-xl flex items-end gap-1.5",
        toggle: "header-color-text lg:hidden",
      },
    },
  },
});

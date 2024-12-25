# adrianocahete.dev

[My portfolio](https://adrianocahete.dev) on Nuxt 3 + Nuxt UI (Pro)

## Setup

Make sure to install the dependencies:

```bash
pnpm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
pnpm run dev
```

## Production

[https://adrianocahete.dev/](https://adrianocahete.dev)

Auto deployed by main branch.

## ToDo

Some of this todo is migrated from legacy Nuxt2 version.

- [ ] Create a specific page for every project/interface
- [ ] Create a blog to explain the steps of each project
- [ ] Move to i18n instead of hardcoded text
- [ ] Create a Logo
- [ ] Customize Nuxt loading page
- [ ] Make a better error/not found page
- [ ] Add proper favicons (to increase Lighthouse Audit score on PWA)
- [ ] Add more themes than just light/dark theme
- [ ] Add custom themes (add the ability to user modify the theme on-the-fly)
- [ ] Add a toggle to show different information to different industries
- [ ] Add CSS regression tests (BackstopJS, BrowserStack or Helpscout Barista?)
- [ ] Add Vue code tests
- [ ] Generate Lighthouse badges from Github Actions and update the correct files in repository
- [ ] Add [Nuxt Storybook](https://storybook.nuxtjs.org/) to documentation system
- [ ] Add CSS to mock IE users :)

## Fixed with Nuxt 3 migration

- [x] Migrate to latest Nuxt
- [x] Add micro animations to entire portfolio - *[Using Nuxt UI]*
- [x] Move CSS to SASS instead of Stylus ([stylus seems to be deprecated or, at least, stagnated](https://github.com/stylus/stylus/issues/2282)) - *[Using Nuxt UI]*
- [x] Use newly created Logo as link to back Home - *[Using Nuxt UI]*
- [x] Add an interactable animation on the Main page (home) - *[Using Nuxt UI]*
- [x] Add a switch to change themes - *[Using Nuxt UI -- But hidden for now]*

## Previous/deprecated version (Nuxt 2)

You can see here: <https://github.com/AdrianoCahete/adrianocahete.dev-nuxt2>

Deployed at: <https://adrianocahete-dev-nuxt-2.netlify.app/>

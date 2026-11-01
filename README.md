# adrianocahete.dev

[My portfolio](https://adrianocahete.dev) on Nuxt 4 + Nuxt UI 4 + Tailwind CSS 4.

## Setup

Use Node.js 24.15.0 (see `.nvmrc`) or another version supported by `engines.node` in `package.json`.

Install the locked dependencies:

```bash
npm ci
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
npm run dev
```

Before publishing, run `npm run lint`, `npm run typecheck` and `npm run build`.
Use `npm run generate` for a static build.

The existing root-level Vue directories are retained with `srcDir: "."`.
Nuxt UI 4 includes the former Pro components and does not require a license.

## Search and AI discovery

`nuxt-llms`, `@nuxtjs/robots` and `@nuxtjs/sitemap` generate `/llms.txt`,
`/robots.txt` and `/sitemap.xml`, including in the static build.
Public search and AI crawlers can access the portfolio. `/admin` has `noindex`
and is excluded from the sitemap.

Update `lib/profile.ts` for the shared profile metadata, social profiles and
Schema.org data. The homepage includes a canonical URL and `Person`, `WebSite`
and `ProfilePage` JSON-LD. Discovery content must not contain a public email or PDF.

The About section also renders profile questions and answers from `lib/profile.ts`.
The same answers populate the FAQ JSON-LD and `/llms.txt`.
`/llms-full.txt` includes these answers, work experience, projects and interfaces;
`server/plugins/llms.ts` generates it from the same data used by the visible page
in `lib/portfolio.ts`.

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

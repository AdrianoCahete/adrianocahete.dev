<template>
  <!-- <NuxtLoadingIndicator />
  <NuxtLayout>
    <NavHeader />
    <UMain>
      <NuxtPage />
    </UMain>
    <NavFooter />
  </NuxtLayout> -->
  <UApp>
    <NavHeader />
    <NuxtPage />
  </UApp>
</template>

<script setup>
  import { profile } from "~/lib/profile";

  useHead({
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
    link: [
      { rel: "icon", href: "/favicon.ico" },
      { rel: "alternate", type: "text/plain", href: "/llms.txt", title: "Portfolio overview for AI assistants" },
      { rel: "alternate", type: "text/plain", href: "/llms-full.txt", title: "Detailed portfolio for AI assistants" },
    ],
    htmlAttrs: {
      lang: "en",
    },
  });

  useSeoMeta({
    title: profile.title,
    description: profile.description,
    ogTitle: profile.title,
    ogDescription: profile.description,
    ogSiteName: profile.name,
    ogType: "website",
    ogImage: profile.socialImage,
    ogImageAlt: "Adriano Cahete - Design Technologist & DesignOps",
    twitterTitle: profile.title,
    twitterDescription: profile.description,
    twitterImage: profile.socialImage,
    twitterImageAlt: "Adriano Cahete - Design Technologist & DesignOps",
    twitterCard: "summary_large_image",
  });
</script>

<style lang="scss">
  /*!
*
*  CSS made for use in Adriano Cahete's Portfolio https://adrianocahete.dev/
*
*/

  // Default Dark Mode
  :root {
    font-family: Inter, Roboto, sans-serif;

    --primaryColor: rgba(26, 120, 146, 1);

    --colorHighlight-100: rgba(234, 144, 116, 1);
    --colorHighlight-200: rgba(231, 60, 126, 1);
    --colorHighlight-300: rgba(35, 166, 213, 1);
    --colorHighlight-400: rgba(17, 204, 160, 1);

    --pageBackground-base: rgba(255, 255, 255, 1);

    // --pageBackground: linear-gradient(
    //   -45deg,
    //   var(--pageBackground-base),
    //   rgba(243, 241, 245, 1)
    // );

    --pageBackground-dark: rgba(28, 27, 34, 1);

    --defaultBorderColor: rgba(26, 120, 146, 1);

    --scrollBarHandle: rgba(3, 76, 150, 1);
    --scrollbarColor: var(--contentBg);

    // Selection
    --selectionBG: var(--primaryColor);
    --selectionColor: var(--navColor);

    // Navbar
    --navbarBgColor: linear-gradient(
      -45deg,
      rgba(1, 115, 143, 0.85),
      rgba(1, 59, 143, 0.85),
      rgba(1, 59, 143, 0.85),
      rgba(1, 115, 143, 0.85)
    );
    --navbarColor: transparent;

    --navbarBorder: 1px solid var(--defaultBorderColor);

    --navbarIconColor: rgba(255, 255, 255, 1);
    --navbarIconColorAlt: rgba(25, 107, 137, 1);

    --navColor: rgba(255, 255, 255, 0.7);
    --navColorActive: rgba(255, 255, 255, 1);

    --iconColorHover: rgba(1, 19, 49, 1);

    // Content
    --contentBg: rgba(245, 245, 245, 1);
    --contentColor: rgba(1, 19, 49, 1);

    --titleColor: linear-gradient(
      -45deg,
      rgba(234, 144, 116, 1),
      rgba(231, 60, 126, 1),
      rgba(35, 166, 213, 1),
      rgba(35, 213, 171, 1)
    );

    --subtitleColor: var(--primaryColor);

    // Buttons
    --btnPrimaryBorderColor: linear-gradient(
      -45deg,
      rgba(23, 205, 205, 1) 0%,
      rgba(1, 59, 143, 1) 100%
    );
  }

  // Browser Customizations
  // Scrollbar for Chrome
  // https://developer.mozilla.org/en-US/docs/Web/CSS/::-webkit-scrollbar
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px var(--scrollbarColor);
    border-radius: 3px;
  }

  // Handle
  ::-webkit-scrollbar-thumb {
    background: var(--scrollBarHandle);
    border-radius: 10px;

    &:hover {
      background: var(--scrollBarHandle);
    }
  }

  ::-webkit-scrollbar-track-piece {
    // not handle on
    background: var(--scrollbarColor);
  }

  body {
    scroll-snap-type: y proximity;
    scroll-snap-align: start;
    // scroll-margin: 40px;
  }

  // Animations
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes fromUp2Down {
    0% {
      transform: translateY(-10px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes fromDown2Up {
    0% {
      transform: translateY(30px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes gradient-1 {
    0% {
      background-position: 0% 50%;
    }
    100% {
      background-position: 100% 50%;
    }
  }

  @keyframes gradient-2 {
    0% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @keyframes gradient-title {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  // Texts
  .text-gradient,
  .dark\:text-gradient:is(.dark *) {
    cursor: default;
    color: transparent;
    background: var(--titleColor);
    background-size: 300% 100%;
    background-position: 180% 100%;
    background-clip: text;
    line-height: 1.2;
    transition: background-position 2s ease-in-out;

    &:hover {
      background-position: 250% 100%;
      transition: background-position 2s ease-in-out;
    }
  }

  .text-gradient-main {
    color: transparent;
    background: var(--titleColor);
    background-size: 400% 400%;
    background-clip: text;
    animation: gradient-title 5s ease-in-out infinite;
    transition: font-size 0.5s ease-in-out;
    font-weight: 600;
  }

  .drop-shadow-custom {
    filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.5));
    transition: filter 0.5s ease-in-out;

    &:hover {
      filter: none;
      transition: filter 0.5s ease-in-out;
    }
  }
</style>

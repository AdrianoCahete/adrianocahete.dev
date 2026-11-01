import { createConfigForNuxt } from "@nuxt/eslint-config";

export default createConfigForNuxt({
  dirs: { src: ["."], pages: ["pages"], components: ["components"] },
}, {
  ignores: [".agents/**", ".codex/**", ".nuxt/**", ".output/**"],
}, {
  linterOptions: { noInlineConfig: true },
  rules: {
    "vue/multi-word-component-names": "off",
    "vue/max-attributes-per-line": "off",
    "vue/no-v-html": "off",
  },
});

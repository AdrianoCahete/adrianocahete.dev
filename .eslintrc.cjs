module.exports = {
  root: true,
  extends: ["@nuxt/eslint-config"],
  linterOptions: {
    noInlineConfig: true,
  },
  rules: {
    // Global
    semi: ["error", "always"],
    "quote-props": ["error", "as-needed", { omitLastInOneLineBlock: true }],

    // Vue
    "vue/multi-word-component-names": 0,
    "vue/max-attributes-per-line": "off",
    "vue/no-v-html": 0,
  },
  ignores: {
    files: ["**/node_modules/*", ".git/", "**/dist/*", ".output/*", ".nuxt/*"],
  },
};

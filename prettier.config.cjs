/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */

const config = {
  arrowParens: "always",
  bracketSpacing: true,
  bracketSameLine: false,
  embeddedLanguageFormatting: "auto",
  endOfLine: "lf",
  htmlWhitespaceSensitivity: "css",
  insertPragma: false,
  printWidth: 80,
  proseWrap: "preserve",
  quoteProps: "preserve",
  insertPragmas: true,
  requirePragma: false,
  semi: true,
  singleAttributePerLine: true,
  singleQuote: false,
  trailingComma: "es5",
  tabWidth: 2,
  useTabs: false,

  // JSX
  jsxBracketSameLine: true,
  jsxSingleQuote: false,

  // Vue
  vueIndentScriptAndStyle: true,

  // Experimental
  experimentalTernaries: false,
};

// VSCode config
//   "filepath": "c:\\Users\\nanor\\AppData\\Roaming\\Code\\User\\settings.json",
//   "parser": "json"

module.exports = config;

import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [...compat.extends("@nuxt/eslint-config"), {
    rules: {
        semi: ["error", "always"],

        "quote-props": ["error", "as-needed", {
            omitLastInOneLineBlock: true,
        }],

        "vue/multi-word-component-names": 0,
        "vue/max-attributes-per-line": "off",
        "vue/no-v-html": 0,
    },
}];
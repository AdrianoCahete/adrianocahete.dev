import type { Config } from "tailwindcss";
import * as defaultTheme from "tailwindcss/defaultTheme";
import * as animate from "tailwindcss-animate";
import { setupInspiraUI } from "@inspira-ui/plugins";

export default <Partial<Config>>{
  // content: [
  //   'docs/content/**/*.md'
  // ]
  theme: {
    extend: {
      fontFamily: {
        display: ["Inter", "Inter var", ...defaultTheme.fontFamily.sans],
        body: ["Inter", "Inter var", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        // ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
    },
  },
  plugins: [animate, setupInspiraUI],
};

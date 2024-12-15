import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          red: "hsl(0, 78%, 62%)",
          cyan: "hsl(180, 62%, 55%)",
          orange: "hsl(34, 97%, 64%)",
          blue: "hsl(212, 86%, 64%)",
        },
        secondary: {
          veryDarkBlue: "hsl(234, 12%, 34%)",
          darkGrayishBlue: "hsl(229, 6%, 66%)",
          veryLightGray: "hsl(0, 0%, 98%)",
        },
      },
      boxShadow: {
        custom: "0 10px 20px 0 hsla(212, 86%, 64%, 0.3)",
      },
    },
  },
  plugins: [],
} satisfies Config;

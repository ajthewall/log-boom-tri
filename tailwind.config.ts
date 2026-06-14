import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      colors: {
        swim: { DEFAULT: "#2196F3", dark: "#1565C0" },
        bike: { DEFAULT: "#4CAF50", dark: "#2E7D32" },
        run: { DEFAULT: "#FF6D00", dark: "#E65100" },
        race: {
          dark: "#0f1117",
          surface: "#1a1f2e",
          light: "#f0f2f5",
          muted: "#8892a4",
        },
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
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
        "neon-blue": "#00FFFF",
        "neon-green": "#39FF14",
        "dark-surface": "#111111",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        "neon-blue": "0 0 10px rgba(0, 255, 255, 0.5)",
        "neon-green": "0 0 10px rgba(57, 255, 20, 0.5)",
      },
    },
  },
  plugins: [],
};
export default config;

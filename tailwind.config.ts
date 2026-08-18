import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        tlg: {
          midnight: "#07152F", // Primary Navy
          emerald: "#082A19", // Emerald Accent
          purple: "#2A104A", // Purple Accent
          signatureGold: "#D09A3A", // Premium Gold
          heritageGold: "#DBAE57", // Keep for legacy compatibility if used
          champagne: "#F7CB64",
          ivory: "#F5F3F0", // Off-White
          stone: "#EEEEEE",
          charcoal: "#181A1C",
          white: "#FFFFFF",
        }
      },
      fontFamily: {
        sans: ['var(--font-manrope)', 'sans-serif'],
        serif: ['var(--font-cormorant)', 'serif'],
      }
    },
  },
  plugins: [],
};
export default config;

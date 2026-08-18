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
          midnight: "#030713",
          emerald: "#092A19",
          signatureGold: "#CE9129",
          heritageGold: "#DBAE57",
          champagne: "#F7CB64",
          ivory: "#F7F5EF",
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

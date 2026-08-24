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
      },
      animation: {
        'blob-spin': 'blob-spin 20s infinite linear',
        'blob-spin-reverse': 'blob-spin-reverse 25s infinite linear',
        'blob-float': 'blob-float 15s infinite ease-in-out',
      },
      keyframes: {
        'blob-spin': {
          '0%': { transform: 'rotate(0deg) scale(1)' },
          '50%': { transform: 'rotate(180deg) scale(1.1)' },
          '100%': { transform: 'rotate(360deg) scale(1)' },
        },
        'blob-spin-reverse': {
          '0%': { transform: 'rotate(360deg) scale(1)' },
          '50%': { transform: 'rotate(180deg) scale(1.2)' },
          '100%': { transform: 'rotate(0deg) scale(1)' },
        },
        'blob-float': {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-20px) scale(1.05)' },
        }
      }
    },
  },
  plugins: [],
};
export default config;

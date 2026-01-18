import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "var(--brand-navy)",
          yellow: "var(--brand-yellow)",
          white: "var(--brand-white)"
        }
      },
      borderRadius: {
        xl: "1rem"
      },
      boxShadow: {
        card: "0 10px 30px rgba(1, 24, 64, 0.10)",
        cardHover: "0 14px 40px rgba(1, 24, 64, 0.16)"
      }
    }
  },
  plugins: []
};

export default config;

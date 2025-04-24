
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(222 47% 11%)",
        foreground: "hsl(214 32% 91%)",
        primary: {
          DEFAULT: "hsl(217 91% 60%)",
          foreground: "hsl(210 40% 98%)",
        },
        secondary: {
          DEFAULT: "hsl(217 32% 17%)",
          foreground: "hsl(210 40% 98%)",
        },
        destructive: {
          DEFAULT: "hsl(0 84% 60%)",
          foreground: "hsl(210 40% 98%)",
        },
        muted: {
          DEFAULT: "hsl(217 32% 17%)",
          foreground: "hsl(215 20% 65%)",
        },
        accent: {
          DEFAULT: "hsl(217 32% 17%)",
          foreground: "hsl(210 40% 98%)",
        },
        popover: {
          DEFAULT: "hsl(222 47% 11%)",
          foreground: "hsl(214 32% 91%)",
        },
        card: {
          DEFAULT: "hsl(222 47% 11%)",
          foreground: "hsl(214 32% 91%)",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.3s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;


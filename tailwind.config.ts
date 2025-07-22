import type { Config } from "tailwindcss"
import type { PluginAPI } from "tailwindcss/types/config"
import plugin from "tailwindcss/plugin"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
        sm: "640px",
        md: "900px",
        lg: "1200px",
        xl: "1400px",
      },
    },
    extend: {
      boxShadow: {
        "inner-sm": "inset 0 1px 2px rgba(0, 0, 0, 0.05)",
        "inner-md": "inset 0 2px 6px rgba(0, 0, 0, 0.1)",
        "inner-lg": "inset 0 4px 10px rgba(0, 0, 0, 0.15)",
        "inner-xl": "inset 0 8px 20px rgba(0, 0, 0, 0.2)",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
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
      fontSize: {
        fluid: 'clamp(1.25rem, 2vw, 3rem)', 
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
        "pulse-slow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.2" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-slow": "pulse-slow 4s ease-in-out infinite",
        "fade-in": "fade-in 2s ease-in-out forwards",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    plugin(({ addUtilities }) => {
      addUtilities({
        ".bg-grayscale": {
          position: "relative",
          overflow: "hidden",
        },
        ".bg-grayscale::before": {
          content: "''",
          position: "absolute",
          inset: "0",
          background: "inherit",
          filter: "grayscale(100%)",
          zIndex: "-1",
        },
        ".bg-grayscale > *": {
          position: "relative",
          zIndex: "10",
        },
      })
    }),
  ],
} satisfies Config

export default config

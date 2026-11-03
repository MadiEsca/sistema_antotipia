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
        "da-bg":       "#08090B",
        "da-bg2":      "#101216",
        "da-surface":  "#15181D",
        "da-border":   "#292D34",
        "da-text":     "#E8E9EC",
        "da-muted":    "#9297A1",
        "da-accent":   "#C5FF4A",
        "da-alert":    "#FF5B64",
      },
      fontFamily: {
        sans:  ["var(--font-inter)", "system-ui", "sans-serif"],
        mono:  ["var(--font-jetbrains)", "ui-monospace", "monospace"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },
      animation: {
        "fade-in":    "fadeIn 0.6s ease forwards",
        "fade-up":    "fadeUp 0.7s ease forwards",
        "scan-line":  "scanLine 3s linear infinite",
      },
      keyframes: {
        fadeIn:   { "0%": { opacity: "0" },                             "100%": { opacity: "1" } },
        fadeUp:   { "0%": { opacity: "0", transform: "translateY(20px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        scanLine: { "0%": { transform: "translateY(-100%)" },           "100%": { transform: "translateY(100vh)" } },
      },
    },
  },
  plugins: [],
};
export default config;

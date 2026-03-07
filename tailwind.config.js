/** @type {import('tailwindcss').Config} */
/**
 * Tailwind theme configuration for ITL brand colors, fonts, and gradients.
 */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#04060D",
          900: "#060A14",
          800: "#080F1E",
          700: "#0A1428",
        },
        teal: {
          brand: "#0B6E6E",
          light: "#12A8A8",
          glow: "#1ECECE",
        },
        accent: "#E8E4D4",
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        body: ["DM Sans", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(ellipse 80% 60% at 30% 50%, #0B4A4A 0%, #061220 50%, #04060D 100%)",
        "section-gradient":
          "linear-gradient(180deg, #04060D 0%, #080F1E 100%)",
        "cta-gradient":
          "linear-gradient(135deg, #0B6E6E 0%, #061220 100%)",
      },
    },
  },
  plugins: [],
}


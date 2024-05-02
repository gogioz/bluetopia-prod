/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements-react/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Camel-ExtraBold": ["Camel-ExtraBold", "sans-serif"],
        "Camel-Bold": ["Camel-Bold", "sans-serif"],
        "Camel-Regular": ["Camel-Regular", "sans-serif"],
        "Camel-Medium": ["Camel-Medium", "sans-serif"],
        "Camel-ExtraLight": ["Camel-ExtraLight", "sans-serif"],
        "Camel-Light": ["Camel-Light", "sans-serif"],
        "Camel-Thin": ["Camel-Thin", "sans-serif"],
      },
      animation: {
        ["infinite-slider"]: "infiniteSlider 30s linear infinite",
        ["team-slider"]: "infiniteSlider 20s linear infinite",
      },
      keyframes: {
        infiniteSlider: {
          "0%": { transform: "translateX(0)" },
          "100%": {
            transform: "translateX(calc(-250px * 5))",
          },
        },
      },
    },
    screens: {
      xs: { min: "280px" },
      sm: { min: "360px" },
      md: { min: "430px" },
      lg: { min: "768px" },
      xl: { min: "1280px" },
      "2xl": { min: "1400px" },
      "3xl": { min: "1600px" },
      "4xl": { min: "1730px" },
      "5xl": { min: "1920px" },
    },
  },
};

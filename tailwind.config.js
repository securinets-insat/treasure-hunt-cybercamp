// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    colors: {
      primary: "#F8F207",
      secondary: "#3BB7CE",
      black: "#000000",
      white: "#FFFFFF",
      transparent: "transparent",
    },
    fontFamily: {
      display: ["Orbitron", "sans-serif"],
      body: ["Ubuntu", "sans-serif"],
    },
    screens: Object.fromEntries(
      Object.entries(defaultTheme.screens).filter(([key]) => key !== "2xl")
    ),
    extend: {
      boxShadow: (theme) => ({
        solid4: `4px 4px 0px ${theme("colors.secondary")}`,
        solid2: `2px 2px 0px ${theme("colors.secondary")}`,
      }),
      dropShadow: (theme) => ({
        solid4: `4px 4px 0px ${theme("colors.secondary")}`,
        solid2: `2px 2px 0px ${theme("colors.secondary")}`,
      }),
      backgroundImage: {
        "block-top-pattern": "url('~/assets/images/block-top.svg')",
        "block-bottom-pattern": "url('~/assets/images/block-bottom.svg')",
      },
    },
  },
  plugins: [],
};

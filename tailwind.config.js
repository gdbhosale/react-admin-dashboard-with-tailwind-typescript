/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      primary: colors.indigo,
      white: colors.white,
      black: colors.black,
      gray: colors.gray,
      red: colors.red,
      green: colors.green,
      blue: colors.blue,
    },
    extend: {},
  },
  plugins: [],
};

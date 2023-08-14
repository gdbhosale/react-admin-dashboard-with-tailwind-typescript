/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      black: colors.black,
      blue: colors.blue,
      gray: colors.gray,
      green: colors.green,
      indigo: colors.indigo,
      primary: colors.indigo,
      red: colors.red,
      white: colors.white,
      slate: colors.slate
    },
    extend: {},
  },
  plugins: [],
};

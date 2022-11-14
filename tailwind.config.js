/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: {
          900: "rgba(255, 255, 255, 1)",
          800: "rgba(255, 255, 255, .8)",
          700: "rgba(255, 255, 255, .7)",
          600: "rgba(255, 255, 255, .6)",
          500: "rgba(255, 255, 255, .5)",
          400: "rgba(255, 255, 255, .4)",
          300: "rgba(255, 255, 255, .3)",
          200: "rgba(255, 255, 255, .2)",
          100: "rgba(255, 255, 255, .1)",
        },
        black: {
          900: "rgba(0, 0, 0, 1)",
          800: "rgba(0, 0, 0, .8)",
          700: "rgba(0, 0, 0, .7)",
          600: "rgba(0, 0, 0, .6)",
          500: "rgba(0, 0, 0, .5)",
          400: "rgba(0, 0, 0, .4)",
          300: "rgba(0, 0, 0, .3)",
          200: "rgba(0, 0, 0, .2)",
          100: "rgba(0, 0, 0, .1)",
        },
      },
      fontFamily: {
        cursive: "Dancing Script, cursive",
      },
    },
  },
  plugins: [],
};

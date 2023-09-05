/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      black: "rgb(var(--black))",
      veryDarkGray: "rgb(var(--very-dark-gray))",
      darkGray: "rgb(var(--dark-gray))",
      linesDark: "rgb(var(--lines-dark))",
      mediumGray: "rgb(var(--medium-gray))",
      linesLight: "rgb(var(--lines-light))",
      lightGray: "rgb(var(--light-gray))",
      white: "rgb(var(--white))",
      mainPurple: "rgb(var(--main-purple))",
      mainPurpleHover: "rgb(var(--main-purple-hover))",
      red: "rgb(var(--red))",
      redHover: "rgb(var(--red-hover))",
    },
    extend: {
      fontFamily: {
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};

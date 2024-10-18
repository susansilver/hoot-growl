/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "white-50": "#FAFAFA",
        "black-950": "#212121",
        "yellow-brand": "#fd6f01",
        "blue-brand": "#12082d",
        secondary: {
          50: "#fff9ec",
          100: "#fff1d3",
          200: "#ffdfa6",
          300: "#ffc86d",
          400: "#ffa433",
          500: "#ff880b",
          600: "#fd6f01",
          700: "#cb5003",
          800: "#a13f0b",
          900: "#81350d",
          950: "#461804",
        },
        primary: {
          50: "#eaecff",
          100: "#d9dbff",
          200: "#babcff",
          300: "#9190ff",
          400: "#7364ff",
          500: "#6441ff",
          600: "#5b20ff",
          700: "#5215ed",
          800: "#4314bf",
          900: "#381a95",
          950: "#12082d",
        },
      },
    },
  },
  plugins: [],
};

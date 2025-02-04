/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{css, js}", "./views/**/*.ejs", "./public/**/*.ejs"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Lato", "Tachoma", "Verdana", "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: ["cmyk", "dark"],
  },
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{css, js}", "./views/**/*.ejs", "./public/**/*.ejs"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Lato", "Tachoma", "Verdana", "Arial"],
    },
  },
  plugins: [],
};

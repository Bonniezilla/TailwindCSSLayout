/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    "./src/*.{html,js,css}",
    "./views/**/*.ejs"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: 'class'
}


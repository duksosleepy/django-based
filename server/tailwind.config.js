/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["templates/*.html","templates/**/*.html","templates/**/**/*.html"],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),],
};

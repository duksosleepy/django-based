import plugin from "tailwindcss/plugin";
import defaultTheme from "tailwindcss/defaultTheme";

import aspectRatio from "@tailwindcss/aspect-ratio";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["templates/*.html","templates/**/*.html","templates/**/**/*.html"],
  theme: {
    extend: {},
  },
  darkMode: "selector",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [aspectRatio, forms, typography],
};

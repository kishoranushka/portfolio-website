/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
  },

  colors: {
    // blue: "#1fb6ff",
    pink: "#d20062",
    cherry: "#d6589f",
    purple: "#d895da",
    glassgreen: "#7ca18f8f",
    // "gray-dark": "#273444",
    blue: "#c4e4ff",
    // "gray-light": "#d3dce6",
  },
  plugins: [require("daisyui")],
};

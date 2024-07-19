/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    screens: {
      'xs': '300',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    fontSize: {
      "13xl": [
        "13rem",
        {
          lineHeight: "17rem",
          letterSpacing: "0.1em",
          fontWeight: "800",
        },
      ],
      "12xl": [
        "12rem",
        {
          lineHeight: "17rem",
          letterSpacing: "0.1em",
          fontWeight: "800",
        },
      ],
      "11xl": [
        "10rem",
        {
          lineHeight: "17rem",
          letterSpacing: "0.1em",
          fontWeight: "800",
        },
      ],
      "10xl": [
        "9rem",
        {
          lineHeight: "9rem",
          letterSpacing: "0.01em",
          fontWeight: "700",
        },
      ],
      "9xl": [
        "8rem",
        {
          lineHeight: "10rem",
          letterSpacing: "0.01em",
          fontWeight: "700",
        },
      ],
      "7xl": [
        "7rem",
        {
          lineHeight: "9rem",
          letterSpacing: "0.01em",
          fontWeight: "700",
        },
      ],
      "6xl": [
        "6rem",
        {
          lineHeight: "8rem",
          letterSpacing: "0.01em",
          fontWeight: "700",
        },
      ],
      "5xl": [
        "4rem",
        {
          lineHeight: "6rem",
          letterSpacing: "0.01em",
          fontWeight: "700",
        },
      ],
      "4xl": [
        "3rem",
        {
          lineHeight: "4rem",
          letterSpacing: "0.01em",
          fontWeight: "700",
        },
      ],

      "3xl": [
        "2rem",
        {
          lineHeight: "2rem",
          letterSpacing: "0.01em",
          fontWeight: "500",
        },
      ],
      "2xl": [
        "1rem",
        {
          lineHeight: "2rem",
          letterSpacing: "0.01em",
          fontWeight: "200",
        },
      ],
    },
    extend: {},
  },

  variants: {
    extend: {},
  },
  // plugins: [require("daisyui")],
};

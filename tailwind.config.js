/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    fontSize: {
      "12xl": [
        "12rem",
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
      "xl": [
        "1rem",
        {
          lineHeight: "2rem",
          letterSpacing: "0.01em",
          fontWeight: "600",
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

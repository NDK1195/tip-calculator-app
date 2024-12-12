/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        box: "0px 32px 43px 0px rgba(79, 166, 175, 0.20)",
      },
      colors: {
        "#26c0ab": "#26c0ab",
        "#00494d": "#00494d",
        "#5e7a7d": "#5e7a7d",
        "#7f9c9f": "#7f9c9f",
        "#c5e4e7": "#c5e4e7",
        "#f4fafa": "#f4fafa",
      },
    },
  },
  plugins: [],
};

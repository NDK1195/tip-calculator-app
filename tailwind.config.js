/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        box: "0px 32px 43px 0px rgba(79, 166, 175, 0.20)",
      },
      colors: {
        "#26C2AE": "#26C2AE",
        "#00474B": "#00474B",
        "#5E7A7D": "#5E7A7D",
        "#7F9D9F": "#7F9D9F",
        "#C5E4E7": "#C5E4E7",
        "#F3F9FA": "#F3F9FA",
      },
    },
  },
  plugins: [],
};

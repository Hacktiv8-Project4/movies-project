/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateRows: {
        "custom-row": "repeat(3, max-content)",
      },
      colors: {
        header: "#05161E", //"#292841",
        body: "#05161E", //"#1C1B29",
        primary: "#423F71",
      },
    },
  },
  plugins: [],
};

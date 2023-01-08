/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        Raleway: ["Raleway", "sans-serif"],
      },
      screens: {
        "sm": {
          "min": "0px",
          "max": "1000px"
        },
        "md": {
          "min": "1000px"
        }
      }
    },
  },
  plugins: [],
};

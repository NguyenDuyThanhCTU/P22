/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        p: "180px",
        d: "1024px",
      },
      fontFamily: {
        //system font

        LexendDeca: ["Lexend Deca", "sans-serif"],
      },
    },
  },
  plugins: [],
};

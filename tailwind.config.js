/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    borderRadius: {
      larg: "30px",
      full: "100%",
      xlarg: "60px",
      small: "24px",
      xsmall: "16px",
    },
    extend: {
      colors: {
        regal0: "#243c5a",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

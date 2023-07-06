/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#D7E3EA",
          100: "#91B0C1",
          300: "#598199",
          400: "#2E5870",
          500: "#113347",
        },
      },
      screens: {
        mobile: { max: "639px" },
      },
    },
  },
  plugins: [],
};

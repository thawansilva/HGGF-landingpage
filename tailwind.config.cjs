/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0B1D26",
      },
      fontFamily: {
        Merriweather: ["Merriweather", "serif"],
        NotoSans: ["Noto-Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./script.js"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        underground: "#090909",
        poster: "#f2f0e8",
        signal: "#ffd400",
        burnt: "#bda100"
      },
      fontFamily: {
        display: ["Impact", "Haettenschweiler", "Arial Black", "sans-serif"]
      }
    }
  },
  plugins: []
};

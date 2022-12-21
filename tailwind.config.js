/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-theme": "#222260",
        "white-border": "#e7ecee",
        "white-hover": "#f6f8f8",
      },
    },
  },
  plugins: [],
};

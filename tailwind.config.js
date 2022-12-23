/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-theme": "#222260",
        "white-border": "#e7ecee",
        "white-hover": "#f6f8f8",
      },
      height: {
        "2/10": "20%",
        "1/10": "10%",
        "7/10": "70%",
        "8/10": "80%",
      },
      minWidth: {
        56: "14rem",
      },
    },
  },
  plugins: [],
};

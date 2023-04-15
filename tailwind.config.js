/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          main: "#1a2722",
          accent1: "#8BC4A4",
          accent2: "#B6D3BB",
          accent3: "#F0F0E8",
          dark: "#1E1E1E",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ], theme: {
    extend: {
      colors: {
        primary: '#0D1931',
        warning: '#FF7700',
        success: '#00C857',
        grey01: "#F3F3F3",
        blue01: "#0290A4"

      }
    },
  },
  plugins: [],
}


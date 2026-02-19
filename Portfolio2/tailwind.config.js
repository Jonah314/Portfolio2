/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          900: "#0B1F17",
          800: "#0F2A20",
          700: "#1B5E20",
          600: "#2E7D32",
          100: "#E8F5E9",
          200: "#A5D6A7",
        }
      }
    },
  },
  plugins: [],
}
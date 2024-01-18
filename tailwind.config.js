/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./posts/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand': '#6161FF'
      }
    },
  },
  plugins: [
    require("@tailwindcss/typography")
  ],
}

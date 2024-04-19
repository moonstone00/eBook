/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'tablet' : '650px',
      'laptop': '1024px',
      'desktop': '1200px'
    },
  },
  plugins: [],
}
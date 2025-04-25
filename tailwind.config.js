/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#2D7DD2',
        'custom-blue2': '#56ace1',
        'custom-blue3': '#8cb6d5',
        'custom-orange': '#FFB623',
        'custom-gray': '#F3F3F3',
        'custom-red': '#DF2935',
        'custom-green': '#034C3C'
      }
    },
  },
  plugins: [],
}


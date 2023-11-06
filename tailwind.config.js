/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Montserrat': ['Montserrat', 'sans-serif'],
        'Chonburi': ['Chonburi', 'sans-serif']
      }
    },
  },
  plugins: [],
}


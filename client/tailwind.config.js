/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        screens: {
        'ph': { 'max': '400px' }, // ph = phone
      },
    },
  },
  plugins: [],
}

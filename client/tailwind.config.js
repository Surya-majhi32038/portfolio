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
       backgroundImage: {
        'twilight-gradient': 'linear-gradient(to right, rgba(18, 18, 18, 0.9), rgba(50, 0, 50, 0.8))',
      },
    },
  },
  plugins: [],
}

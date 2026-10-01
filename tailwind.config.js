/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        // Used by the `font-arabic` utility for Arabic copy (Cairo)
        arabic: ['Cairo', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

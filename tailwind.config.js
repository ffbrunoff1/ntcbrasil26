/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#52A9DC',
        'primary-dark': '#3a8bbd',
        secondary: '#1e293b', // Slate 800
        'light-bg': '#f1f5f9', // Slate 100
        white: '#FFFFFF',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        card: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 20px 30px -10px rgba(82, 169, 220, 0.3)',
      },
      keyframes: {
        'gradient-pan': {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' },
        },
      },
      animation: {
        'gradient-pan': 'gradient-pan 10s ease infinite',
      },
    },
  },
  plugins: [],
};

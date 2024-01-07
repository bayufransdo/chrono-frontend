/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {
      colors: {
        'main': '#0091ff',
        'dark': '#333333',
        'danger': 'd46a6a',
        'base': '#f5f5f5',
        'input-color': '#d4ecff',
        'card-border': '#acdaff',
      },
    },
  },
  plugins: [],
};

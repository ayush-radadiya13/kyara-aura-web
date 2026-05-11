/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './src/app/**/*.{js,jsx}',
    './src/components/**/*.{js,jsx}',
    './src/context/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#d4a373',
          light: '#e8c9a8',
          dark: '#c58b2b',
        },
        purple: {
          DEFAULT: '#7B61FF',
          light: '#9b85ff',
          dark: '#5c47cc',
        },
        cream: '#2a2a2a',
        'cream-muted': '#666666',
      },
      fontFamily: {
        display: ['Georgia', 'Cambria', 'serif'],
        sans: ['system-ui', 'Segoe UI', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 20px rgba(212, 163, 115, 0.25), 0 0 40px rgba(197, 139, 43, 0.15)',
        'gold-glow-sm': '0 0 12px rgba(212, 163, 115, 0.2)',
      },
    },
  },
  plugins: [],
};

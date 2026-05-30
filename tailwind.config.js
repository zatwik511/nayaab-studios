/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50:  '#fdfbf0',
          100: '#faf3d0',
          200: '#f5e79a',
          300: '#edd45e',
          400: '#e3c030',
          500: '#d4af37',
          600: '#b8960c',
          700: '#8f7309',
          800: '#6b5507',
          900: '#4a3b05',
          950: '#2a2100',
        },
      },
    },
  },
  plugins: [],
}

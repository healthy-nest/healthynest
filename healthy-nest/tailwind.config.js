/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#176A8B',
          50: '#E3F2F7',
          100: '#B9E0ED',
          200: '#8DCEE3',
          300: '#61BCD9',
          400: '#35ABCF',
          500: '#1791B5',
          600: '#117190',
          700: '#0C516B',
          800: '#083046',
          900: '#041022',
        },
      },
    },
  },
  plugins: [],
}


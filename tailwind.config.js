/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        primaryColor: '#054C73',
        secondaryColor: '#F2F5FF',
        primaryFont: '#333333'
      }
    },
  },
  plugins: [],
}


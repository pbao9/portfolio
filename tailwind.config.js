/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mon: ['Montserrat', ' sans-serif'],
        permanent: ['Permanent Marker', 'cursive']
      }
    }
  },
  plugins: []
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'navbar-img': "url('./src/assets/images/more/15.jpg')",
        'banner-img': "url('./src/assets/images/more/3.png')"
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
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
        'banner-img': "url('./src/assets/images/more/3.png')",
        'footer-img': "url('./src/assets/images/more/13.jpg')",
        'footer-img2': "url('./src/assets/images/more/24.jpg')",
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
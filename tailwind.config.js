/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
        "./src/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    extend: {
      fontSize: {
        header:['40px','40px']
      },
      backgroundImage:{
        subscribe:"url('/src/img/hero4.jpg')"
      }
    },
  },
  plugins: [],
}

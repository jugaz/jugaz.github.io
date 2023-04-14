/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xxs': '280px',
      'xs': '420px',
      'sm': '640px',
      'md': '1024px',
      'xl': '1280px',
      '2xl': '1024px',
      'transform-none':'transform:none' 
    }
  },
  plugins: [],
}

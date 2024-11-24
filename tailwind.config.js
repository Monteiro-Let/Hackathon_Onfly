/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        font_dark_blue: '#192a3d',
        white: '#ffffff',
        off_white: '#f4f9ff',
        light_blue: '#009efa',
        medium_blue: '#267ffa',
        dark_blue: '#192a3d',
        dark_medium_blue:'#1f6391',
        hover_orange: '#cc4a04',
        orange: '#ff5a05'
      }
    },
  },
  plugins: [],
}
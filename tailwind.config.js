/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        off_white: '#f4f9ff',
        light_blue: '#009efa',
        medium_blue: '#267ffa',
        dark_blue: '#192a3d',
        dark_medium_blue:'#1f6391',
        orange: '#ff5a05'
      }
    },
  },
  plugins: [],
}
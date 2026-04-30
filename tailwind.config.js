/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#1a4a6b',
        secondary: '#2d7a9a',
        accent: '#8B6914',
        gold: '#c9a227',
      },
    },
  },
  plugins: [],
}
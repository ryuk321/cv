/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      color: {
        customBlue: '#de1a1a',
        customGreen: '#4CAF50',
      },
    },
  },
  plugins: [],
}


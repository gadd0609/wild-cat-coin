/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {    
      colors: {
      'coin': '#a5d6e2',
      'coin-200': '#7aabb6',
    },
   }
  },
  plugins: [],
}

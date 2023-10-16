/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#4b49ac",
        inprogress:"#39BCF9",
        completed:"#FF3B30",
        membershipStat1:"#347AE2",
        membershipStat2:"#39BCF9",
        statpurple:"#213f7d",
      },
      fontFamily:{
        sans:[ 'Open Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}
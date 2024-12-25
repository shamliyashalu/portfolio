/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      
      transitionDuration: {
        '1500': '1500ms',
        '2000': '2000ms',
      },
      fontFamily: {
        titillium: ['"Titillium Web"', 'sans-serif'],
        montserrat: ['"Montserrat"', 'sans-serif'],

      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #addffa, #d08b8e)',
        // 'hero-pattern': "url('../assets/Images/Home.png')",
        // 'hero-pattern': "url('/src/assets/Images/Home.png')",
      },

    },
  },
  plugins: [],
}


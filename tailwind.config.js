/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        seafoam: "#54b2a9",
        navy: "#011f4b",
        lightnavy: "#03396c",
      },
      fontFamily: {
        pop: ['Poppins', 'sans-serif'],
        mon: ['Montserrat', 'sans-serif'],
        source: ['Source Code Pro', 'monospace'],
        raleway: ['Raleway', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif']
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        wave: "wave 2.1s linear 1",
      },
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0deg)" },
          "10%": { transform: "rotate(16deg)" },
          "20%": { transform: "rotate(-6deg)" },
          "30%": { transform: "rotate(16deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(16deg)" },
          "60%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(45deg)" },
        },
      },
      backgroundImage: {
        'movie': "url('../src/images/projectimg/movieapp.png')",
        'book': "url('../src/images/projectimg/bookmarker.png')",
        'calculator': "url('../src/images/projectimg/CalculatorApp.png')",
        'calendar': "url('../src/images/projectimg/calendar.png')",
        'mathgame': "url('../src/images/projectimg/mathgame.png')",
        'musicapp': "url('../src/images/projectimg/musicapp.png')",
        'weatherapp': "url('../src/images/projectimg/weatherapp.png')",
        'recipeapp': "url('../src/images/projectimg/recipeapp.png')",
        'jokeapp': "url('../src/images/projectimg/jokeapp.png')"
      }

    },
  },
  plugins: [],
}


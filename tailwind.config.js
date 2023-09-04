/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '8' : 'repeat(8, 1fr)'
      },
      gridTemplateRows: {
        '8' : 'repeat(8, 5vw)'
      }
    },
    fontFamily:{
      dance:[
        "Dancing Script",
      ],
      cour:[
        "Courgette",
      ],
      raleway:[
        "Raleway",
      ],
      vibes:[
        "Great Vibes",
      ],
      prata:[
        "Prata",
      ]
    }
  },
  plugins: [],
}


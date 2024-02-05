/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      fontFamily: {
        quicksand: ["QuickSand", "sans-serif"],
      },
      colors: {
        whiteColor:"#ffffff",
        primaryColor: "#0067FF",
        yellowColor: "#FEB60D",
        purpleColor: "#9771FF",
        irisBlueColor: "#01B5C5",
        headingColor: "#181A1E",
        textColor: "#4E545F",
        blackColor:"#000000",
        blueColor:"#0000FF"
      },

      boxShadow: {
        panelShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;",
      },
      screens: {
        'sm': '640px',
        // mobile=> @media (min-width: 640px) { ... }
  
        'md':'768px',
        // tab=> @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // laptop=> @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        //desktop => @media (min-width: 1280px) { ... }
      },
    },
    
  },
  plugins: [],
}


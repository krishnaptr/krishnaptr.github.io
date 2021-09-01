module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "custom-purple": "#5267DF",
        "custom-red": "#FA5959",
        "custom-blue": "#242A45",
        "custom-gray": "#9194A2",
        "custom-white": "#f7f7f7",
        "classic-blue": "#051622",
        "classic-green": "#1BA098",
        "classic-brown": "#DEB992",
      },
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif']
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          lg: "1124px",
          xl: "1124px",
          "2xl": "1124px",
        },
      },
    },
  },
  variants: {
    extend: {
      scrollbar: ['rounded'],
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

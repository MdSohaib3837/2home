module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "320px",

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }

      "3xl": "1700px",
    },
    maxWidth: {
      'w-96': '350px',
      '3/2': '300px',
      '5/2':'250px'
    },
    extend: {
      fontFamily: {
        opensans: ["OpenSans"],
        poppins: ["Poppins"],
      },
    },
    colors: {
      'grey': '#9E9E9E',
      'brown':'#C49676',
      'green':'#003030'
    },
    fontSize: {
      'lg': '40px',
      'md': '26px',
      'sm': '14px',
      'smd':'20px'
    },
  },
  plugins: [],
};

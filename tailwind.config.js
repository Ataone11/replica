const PRIMARY_COLOR = "#ff1010";
const GRIS = "#1d1d1d";

module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        primary: PRIMARY_COLOR,
        gris: GRIS,
      },

      backgroundImage: (theme) => ({
        Foto: "url('background_header.png')",
        About: "url('background_about.png')",
        classes: "url('background_classes.png')",
      }),
    },
  },
  variants: {
    extend: {
      textColor: ["active"],
      backgroundColor: ["active"],
      width: ["responsive", "hover", "focus"],
      height: ["hover", "focus"],
      borderRadius: ["hover", "focus"],
      outline: ["hover", "active"],
      inset: ["hover", "focus"],
      margin: ["hover", "focus"],
      borderColor: ["active"],
    },
  },

  plugins: [],
};

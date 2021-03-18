const isProduction = !process.env.ROLLUP_WATCH; // or some other env var like NODE_ENV

module.exports = {
  future: {
    // For Tailwind 2.0 upcoming changes
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  plugins: [],
  purge: {
    content: ["./src/**/*.svelte", "./public/**/*.html"],
    enabled: isProduction, // Disable purge in dev
  },
  theme: {
    colors: {
      black: "#000000",
      white: "#ffffff",
      // almostWhite: #eefaff

      "light-blue": "#eefaff",
      "dark-blue": "#0000c2",
      blue: "#0000ff",

      cyan: "#00ffff",
      cyan2: "#00ecff",

      pink: "#ff00ff",
      green: "#00c84a",

      "purple-light": "#daddff",

      grey: "#555555",
      "grey-light": "#838383",
      "grey-lighter": "#c1c1c1",

      error: "#ff0000",
      // TODO - add other colors from pallete
      // #2d2c47
    },
    fontFamily: {
      sans: ["Nunito Sans, sans-serif"], // TODO - use GreycliffCF
    },

    extend: {
      boxShadow: {
        sidebar: "2px 0px 5px 0px rgba(45, 44, 71, 0.07)",
      },
    },
  },
  variants: {
    extend: {
      textColor: ["visited"],
    },
  },
};

module.exports = {
  mode: "jit",
  purge: {
    // enabled: true,
    enabled: process.env.TAILWIND_MODE === "build",
    content: ["./src/app/**/*.html", "./src/**/*.scss"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

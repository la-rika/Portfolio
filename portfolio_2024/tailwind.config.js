/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    fontSize: {
      xxl:"5rem",
      xl:"4rem",
      lg:"2rem",
      md:"1.5rem",
      sm:"1.125rem",
      xs:"1rem"
    },
    fontFamily:{
      "fancy-text":"var(--fancy-text)",
      "base-text":"var(--base-text)"
    },
    extend: {
      colors: {
        "base-color": "var(--base-color)",
        "dark-base": "var(--dark-base)",
        "body-text":"var(--body-text)",
        "light-pink":"var(--light-pink)"
      }
    },
    plugins: [],
  }
}


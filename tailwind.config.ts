
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    mode: "jit",
    theme: {
      extend: {
        fontFamily: {
          inter: ["Inter", "sans-serif"],
          poppins: ['var(--font-poppins)', "sans-serif"],
          bevietnam: ['var(--font-be-vietnam)',"sans-serif"],
          bevietnampro: ['var(--font-be-vietnam)'],
        },
        colors: {
            "black-100": "#111D15",
            "primary-green": {
            DEFAULT: "#2B59FF",
            100: "#36B864",
          },
          "primary-white": "#FFFFFF",
          "secondary-orange": "#f79761",
          "light-white": {
            DEFAULT: "rgba(59,60,152,0.03)",
            100: "rgba(59,60,152,0.02)",
          },
          grey: "#4D4D4D",
          "grey-100": "#666666",
        },
        backgroundImage: {
          'pattern': "url('/pattern.png')",
          'hero-bg': "url('/hero.png')",
          'hero': "url('/hero_lamge.png')"
        }
      },
    },
    plugins: [],
  };
  
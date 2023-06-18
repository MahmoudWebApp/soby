import withMT from "@material-tailwind/react/utils/withMT";
export default withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      animation: {
        wiggle: "wiggle 2s ease-in-out infinite",
      },
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      almarai: ["Almarai", "sanx-serif"],
    },
    colors: {
      "soby-light-1": "#FFFFFF",
      "soby-light-2": "#FBFBFB",
      "soby-gray-light-1": "#F2F0F0",
      "soby-gray-light-2": "#F2F2F2",
      "soby-gray-light-3": "#E6E6E6",
      "soby-gray-light-4": "#EBEBEB",
      "soby-gray-dark-1": "#d6d6d6",
      "soby-gray-dark-2": "#AAAAAA",
      "soby-gray-dark-3": "#707070",
      "soby-gray-dark-4": "#676767",
      "soby-gray-blue-gray": "#1A2442",
      "soby-red": "#FF0707",
      "soby-yellow-light": "#F6A733",
      "soby-yellow-dark": "#E8A042",
      "soby-dark-1": "#131313",
      "soby-dark-2": "#000000",
      "soby-blue-light-1": "#eff0f1",
    },
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
    require('tailwindcss-dir')(),
],
});


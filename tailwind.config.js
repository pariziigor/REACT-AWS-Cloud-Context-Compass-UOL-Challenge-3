/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      teste: "#9766E1",
      body: "#D9E6F7",
      corT: "#484848",
      corB: "#000",
      "brand-color": "#ED6D25",
      "dark-10": "#4b4b4b",
      "dark-20": "#b4aeAe ",
      "dark-30": "#fdfeff",
      "dark-40": "#fff",
      "support-01": "#2962ff",
      "support-02": "#0bb07b",
      "support-03": "#ffce52",
      "support-04": "#f03d3d",
      "support-05": "#e0e0e0",
      "input-color": "#EFF3F8",
      "no-color": "transparent",
    },
    extend: {},
  },
  plugins: [],
};

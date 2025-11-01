import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'main-bg': '#010101',
        'secondary-bg': '#212121',
        
        'box-gray': '#303030',
        'border-gray': '#727272',
        'opasity-gray': '#6D6D6A',
        'secondary-opasity-gray': '#C0C3C6',
        'opasity-bg-gray': '#A6A6A61A',
        'modal-inner-bg': '#010101',
        
        'main': '#fff',
        'secondary': '#8C8C8C',
        'yellow': '#EDBF81',
        'light-pink': '#FFACBF',
        'pink': '#E3006B',
        'gray': '#909191',
        'light-gray': '#D9D9D9',
        'light-red': '#E2AFA0',
        'dark': '#181818',
        'green': '#27C840',
        'white-opasity': '#B5B5B5',
        'button-light-bg': '#F5F1EE',
        'dark-blue': '#1D364D',
        'white-light-grey': '#EBEBEB',
        'title-gray': '#B7B7B7',
        'red': '#D46F77'
      }
    },
  },
  plugins: [],
};
export default config;

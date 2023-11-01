import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './entities/**/*.{js,ts,jsx,tsx,mdx}',
    './features/**/*.{js,ts,jsx,tsx,mdx}',
    './global/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './shared/**/*.{js,ts,jsx,tsx,mdx}',
    './widgets/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: {
        50: '#d4d4d4',
        100: '#a9a9a9',
        200: '#7d7d7d',
        300: '#525252',
        400: '#272727',
        500: '#1f1f1f',
        600: '#171717',
        700: '#101010',
        800: '#080808',
        900: '#000000',
      },
      pistachio: {
        50: '#e7f5e8',
        100: '#cfebd1',
        200: '#b8e1ba',
        300: '#a0d7a3',
        400: '#88cd8c',
        500: '#6da470',
        600: '#527b54',
        700: '#365238',
        800: '#1b291c',
        900: '#000000',
      },
      imperial: {
        50: '#fcdcdc',
        100: '#f9b9ba',
        200: '#f79797',
        300: '#f47475',
        400: '#f15152',
        500: '#c14142',
        600: '#913131',
        700: '#602021',
        800: '#301010',
        900: '#000000',
      },
      glaucous: {
        50: '#e2e7f6',
        100: '#c6d0ec',
        200: '#a9b8e3',
        300: '#8da1d9',
        400: '#7089d0',
        500: '#5a6ea6',
        600: '#43527d',
        700: '#2d3753',
        800: '#161b2a',
        900: '#000000',
      },
    },
  },
  plugins: [],
};
export default config;

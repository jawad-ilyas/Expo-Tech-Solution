/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      transformStyle: {
        'preserve-3d': 'preserve-3d'
      },
      perspective: {
        '1000': '1000px'
      },
      container: {
        center: true,
        padding: '20px',
        screens: {
          'xl': '1180px', // Change the max-width for 2xl breakpoint
        },
      },
      colors: {
        primary: '#448c74',
        primaryLight: '#ECF3F1',
        secondary: '#edf1f5',
        success: '#3fca90',
        blue: '#3f7fca',
        warning: '#edcb50',
        red: '#ed5050',
        light: '#fff',
        dark: '#121519',
        lightGray: 'hsla(0, 0%, 100%, 0.7)',
        lightBg: '#F6F9FC',
        darkbg: '#181B1E',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        sans: ['Sans', 'sans-serif'],
        serif: ['Serif', 'serif'],
      },
    },
  },
  plugins: [],
}

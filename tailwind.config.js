/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily:{
      'sans': ["Inconsolata",' monospace'],
      'sansita': ["Chivo Mono", 'monospace'],
    },
    extend: {
      dropShadow:{
        'custom-shadow': '5px 3px 3px rgb(146, 45, 255)',
      }
    },
  },
  plugins: [],
}


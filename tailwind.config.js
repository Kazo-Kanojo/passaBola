export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        primary: "#F8BBD9",
        secondary: "#FFFFFF", 
        tertiary: "#B19CD9",
        accent: "#E91E63",
        text: "#333333",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
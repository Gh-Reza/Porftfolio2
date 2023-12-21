/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Poppins', 'sans-serif'],
      'serif': ['Poppins', 'serif'],
      'mono': ['Poppins', 'monospace'],
      'display': ['Poppins', 'sans-serif'],
      'body': ['Poppins', 'sans-serif'],
    },
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: []
};

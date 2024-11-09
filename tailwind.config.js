/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    cursor: {
      fancy: 'url("/assets/batman.png"), pointer',
    },
  },
  plugins: [],
};

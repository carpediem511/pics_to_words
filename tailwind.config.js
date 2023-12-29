/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
	    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
      screens: {
      'mini': '300px',
      // => @media (min-width: 640px) { ... }
  },
  plugins: [],
}
}

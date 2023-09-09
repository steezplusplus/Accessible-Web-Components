/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}'],
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};

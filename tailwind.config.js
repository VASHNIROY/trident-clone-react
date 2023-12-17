// /** @type {import('tailwindcss').Config} */

// module.exports = {
//   content: ["./src/**/*.{html,js}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };



module.exports = {
  content: [
    // './src/**/*.{html,js}',
    'node_modules/preline/dist/*.js',
    "./src/**/*.{html,js}",
  ],
  plugins: [
    // require('@tailwindcss/forms'),
    require('preline/plugin'),
  ],
  theme: {
    extend: {},
  },
};

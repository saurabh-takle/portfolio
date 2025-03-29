/** @type {import('tailwindcss').Config} */
const { colors: defaultColors } = require('tailwindcss/defaultTheme')

module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          name: '#5CD3AD'
        },
        backgroundImage: {
          brush: "url('/brush.svg')"
        }
      },
    },
    plugins: [],
  }

//////////////

// const colors = {
//     ...defaultColors,
//     ...{
//         "custom-yellow": {
//             "500": "#EDAE0A",
//         },
//     },
// }

// module.exports = {
//     "theme": {
//         "colors": colors,
//     }
// };
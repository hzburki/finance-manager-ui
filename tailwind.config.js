const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
export default withMT(
  {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        boxShadow: {
          'r-md': "2px 0px 3px 1px #00000024"
        }
      },
    },
    plugins: [],
  }
)


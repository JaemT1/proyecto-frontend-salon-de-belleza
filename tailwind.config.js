/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      animation: {
        progress: 'progress 1s linear forwards',
        progressOut: 'progressOut 1s linear forwards',
      },
      keyframes: {
        progress: {
          '0%': {
            backgroundPosition: 'right center',
          },
          '100%': {
            backgroundPosition: 'left center',
          },
        },
        progressOut: {
          '0%': {
            backgroundPosition: 'left center',
          },
          '100%': {
            backgroundPosition: 'right center',
          },
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundPosition: ['hover'],
      backgroundSize: ['hover'],
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
};
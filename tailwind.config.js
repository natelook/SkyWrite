module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        green: '#00c65e',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

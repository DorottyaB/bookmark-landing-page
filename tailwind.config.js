/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    extend: {
      colors: {
        softBlue: 'hsl(231, 69%, 60%)',
        softRed: 'hsl(0, 94%, 66%)',
        darkBlue: 'hsl(229, 31%, 21%)',
        grayishBlue: 'hsl(229, 8%, 60%)',
      },
      backgroundImage: {
        'hero-pattern': "url('../images/background.svg')",
        'bg-pattern': "url('../images/background-rotated.svg')",
      },
    },
  },
  plugins: [],
};

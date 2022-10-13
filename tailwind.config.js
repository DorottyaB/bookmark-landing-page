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
    fontSize: {
      xs: '12px',
      sm: '13px',
      button: '14px',
      md: '15px',
      base: '16px',
      lg: '18px',
      xl: '20px',
      '2xl': '24px',
      '3xl': '30px',
      '4xl': '32px',
      '5xl': '48px',
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
      backgroundSize: {
        '70%': '70%',
        '80%': '80%',
      },
    },
  },
  plugins: [],
};

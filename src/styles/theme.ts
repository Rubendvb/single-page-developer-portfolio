const fontWeightRegular = 500;
const fontWeightBold = 700;

const theme = {
  font: {
    family: 'Space Grotesk, sans-serif',
    regular: fontWeightRegular,
    bold: fontWeightBold,
    sizes: {
      xsmall: '1.6rem',
      small: '1.8rem',
      medium: '2.4rem',
      large: '4.8rem',
      xlarge: '8.8rem',
    },
  },
  colors: {
    white: '#ffffff',
    black: '#151515',
    green: '#4ee1a0',
    darkGray: '#242424',
    gray: '#d9d9d9',
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem',
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50,
  },
  variants: {
    heading: {
      xl: {
        size: '8.8rem',
        lineHeight: '8.8rem',
        letterSpacing: '-0.25rem',
        weight: fontWeightBold,
      },
      l: {
        size: '4.8rem',
        lineHeight: '5.6rem',
        letterSpacing: '-0.15rem',
        weight: fontWeightBold,
      },
      m: {
        size: '2.4rem',
        lineHeight: '3.2rem',
        letterSpacing: '0rem',
        weight: fontWeightBold,
      },
      body: {
        size: '1.8rem',
        lineHeight: '2.8rem',
        letterSpacing: '0rem',
        weight: fontWeightRegular,
      },
    },
  },
};

export default theme;

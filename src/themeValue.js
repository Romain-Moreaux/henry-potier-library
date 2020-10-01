export const themeValue = {
  colors: {
    raven: 'rgb(18, 38, 63)',
    green: 'rgb(0, 217, 126)',
    red: 'rgb(230, 55, 87)',
    orange: 'rgb(253, 126, 20)',
    blue: '#07689f',
    yellow: '#ffc93c',
    yellowAlt1: '#ffc533',
    yellowAlt2: '#ffb700',
    cyan: '#40a8c4',
    blueAlt: '#a2d5f2',
    white: 'rgb(255, 255, 255)',
    whiteAlt: 'rgb(249, 251, 253)',
    grey: '#dddddd',
  },
  displays: {
    page: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
    },
  },
  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
  },
  texts: {
    xs: '1.1rem',
    sm: '1.3rem',
    md: '1.6rem',
    lg: '1.9rem',
    xl: '2.3rem',
    xxl: '3rem',
    xxxl: '4rem',
  },
  fonts: {
    primary: "'Nunito Sans', sans-serif",
  },
  wrappers: {
    w975: {
      maxWidth: 975,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    w1280: {
      maxWidth: 1280,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    w11366: {
      maxWidth: 1366,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    w1480: {
      maxWidth: 1440,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  buttons: {
    prototype: {
      outline: 0,
      border: 0,
      borderRadius: 4,
      color: 'white',
      fontWeight: 600,
      cursor: 'pointer',
      fontFamily: 'inherit',
      fontSize: 'inherit',
      lineHeight: '3rem',
      paddingLeft: '1.2rem',
      paddingRight: '1.2rem',
      transition:
        'box-shadow 150ms cubic-bezier(0.2, 0, 0, 1) 0s, transform 150ms cubic-bezier(0.2, 0, 0, 1) 0s',
      '&:hover': {
        transform: 'scale(1.03)',
        boxShadow: 'rgba(9, 30, 66, 0.13) 0px 2px 1px',
      },
    },
    primary: {
      background: '#ffc93c',
      color: '#07689f',
      border: '1px solid',
      borderColor: '#ffc93c #ffc533 #ffb700',
    },
    secondary: {
      background: '#07689f',
      color: '#ffc93c',
      border: '1px solid #07689f',
    },
  },
  links: {
    isActive: {
      color: '#ffc93c',
    },
  },
  spaces: {
    xxl: '4.8rem',
    xl: '3.6rem',
    lg: '2.4rem',
    md: '1.2rem',
    sm: '.8rem',
    xs: '.4rem',
  },
}

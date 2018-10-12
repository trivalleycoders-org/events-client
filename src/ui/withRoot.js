import React from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'


const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 800,
      lg: 1280,
      xl: 1920,
    }
  },
  palette: {
    // type: 'dark',
    common: {
      black: '#000',
      white: '#fff',
    },
    primary: {
      light: '#ff5572',
      main: '#dc0747',
      dark: '#a30021',
      contrastText: '#fff',
    },
    // secondary: {
    //   light: '#64b5f6',
    //   main: '#2196f3',
    //   dark: '#1976d2',
    //   contrastText: '#000',
    // },
    secondary: {
      light: '#64b5f6',
      main: '#fff',
      dark: '#1976d2',
      contrastText: '#000',
    },
    error: {
      light: '#e57373',
      main: '#f44336',
      dark: '#d32f2f',
      contrastText: '#fff',
    },
    // gray: {
    //   contrastThreshold: 3,
    //   tonalOffset: 0.2,
    // },
    // text: {
    //   primary: 'rgba(0, 0, 0, 0.87)',
    //   secondary: 'rgba(0, 0, 0, 0.54)',
    //   disabled: 'rgba(0, 0, 0, 0.38)',
    //   hint: 'rgba(0, 0, 0, 0.38)',
    // },
    // divider: 'rgba(0, 0, 0, 0.12)',
    background: {
      paper: '#fff',
      default: '#fafafa'
    },
    // action: {
    //   active: 'rgba(0, 0, 0, 0.54)',
    //   hover: 'rgba(0, 0, 0, 0.08)',
    //   hoverOpacity: 0.08,
    //   selected: 'rgba(0, 0, 0, 0.14)',
    //   disabled: 'rgba(0, 0, 0, 0.26)',
    //   disabledBackground: 'rgba(0, 0, 0, 0.12)',
    // },
  },
  typography: {
    // eslint-disable-next-line
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    display4: {
      fontSize: '7rem',
      fontWeight: 300,
      // eslint-disable-next-line
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      letterSpacing: '-.04em',
      lineHeight: '1.14286em',
      marginLeft: '-.04em',
      // color: 'rgba(0, 0, 0, 0.54)',
    },
    display3: {
      fontSize: '3.5rem',
      fontWeight: 400,
      // eslint-disable-next-line
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      letterSpacing: '-.02em',
      lineHeight: '1.30357em',
      marginLeft: '-.02em',
      color: 'rgba(0, 0, 0, 0.54)',
    },
    display2: {
      fontSize: '2.8125rem',
      fontWeight: 400,
      // eslint-disable-next-line
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      lineHeight: '1.06667em',
      marginLeft: '-.02em',
      color: 'rgba(0, 0, 0, 0.54)',
    },
    display1: {
      fontSize: '2.125rem',
      fontWeight: 400,
      // eslint-disable-next-line
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      lineHeight: '1.20588em',
      color: 'rgba(0, 0, 0, 0.54)',
    },
    headline: {
      fontSize: '1.5rem',
      fontWeight: 400,
      // eslint-disable-next-line
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      lineHeight: '1.35417em',
      color: 'rgba(0, 0, 0, 0.87)',
    },
    title: {
      fontSize: '1.3125rem',
      fontWeight: 500,
      // eslint-disable-next-line
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      lineHeight: '1.16667em',
      color: 'rgba(0, 0, 0, 0.87)',
    },
    subheading: {
      fontSize: '1rem',
      fontWeight: 400,
      // eslint-disable-next-line
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      lineHeight: '1.5em',
      color: 'rgba(0, 0, 0, 0.87)',
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 500,
      // eslint-disable-next-line
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      lineHeight: '1.71429em',
      color: 'rgba(0, 0, 0, 0.87)',
    },
    body1: {
      fontSize: '0.875rem',
      fontWeight: 400,
      // eslint-disable-next-line
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      lineHeight: '1.46429em',
      color: 'rgba(0, 0, 0, 0.87)',
      x: 'y'
    },
    caption: {
      fontSize: '0.75rem',
      fontWeight: 400,
      // eslint-disable-next-line
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      lineHeight: '1.375em',
      color: 'rgba(0, 0, 0, 0.54)',
    },
    button: {
      fontSize: '0.875rem',
      textTransform: 'uppercase',
      fontWeight: 500,
      // eslint-disable-next-line
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      color: 'rgba(0, 0, 0, 0.87)',
    }
  }
})

function withRoot(Component) {
  function WithRoot(props) {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...props} />
      </MuiThemeProvider>
    )
  }

  return WithRoot
}

export default withRoot
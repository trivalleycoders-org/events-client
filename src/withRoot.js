import React from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { blue } from '@material-ui/core/colors'

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
  // ...darkBaseTheme,
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
    type: 'dark',
    primary: blue,
  },
  typography: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    display4: {
      fontSize: '7rem',
      fontWeight: 300,
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      letterSpacing: '-.04em',
      lineHeight: '1.14286em',
      marginLeft: '-.04em',
      // color: 'rgba(0, 0, 0, 0.54)',
    },
    display3: {
      fontSize: '3.5rem',
      fontWeight: 400,
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      letterSpacing: '-.02em',
      lineHeight: '1.30357em',
      marginLeft: '-.02em',
      // color: 'rgba(0, 0, 0, 0.54)',
    },
    display2: {
      fontSize: '2.8125rem',
      fontWeight: 400,
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      lineHeight: '1.06667em',
      marginLeft: '-.02em',
      // color: 'rgba(0, 0, 0, 0.54)',
    },
    display1: {
      fontSize: '2.125rem',
      fontWeight: 400,
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      lineHeight: '1.20588em',
      // color: 'rgba(0, 0, 0, 0.54)',
    },
    headline: {
      fontSize: '1.5rem',
      fontWeight: 400,
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      lineHeight: '1.35417em',
      // color: 'rgba(0, 0, 0, 0.87)',
    },
    title: {
      fontSize: '1.3125rem',
      fontWeight: 500,
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      lineHeight: '1.16667em',
      // color: 'rgba(0, 0, 0, 0.87)',
    },
    subheading: {
      fontSize: '1rem',
      fontWeight: 400,
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      lineHeight: '1.5em',
      // color: 'rgba(0, 0, 0, 0.87)',
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 500,
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      lineHeight: '1.71429em',
      // color: 'rgba(0, 0, 0, 0.87)',
    },
    body1: {
      fontSize: '0.875rem',
      fontWeight: 400,
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      lineHeight: '1.46429em',
      // color: 'rgba(0, 0, 0, 0.87)',
    },
    caption: {
      fontSize: '0.75rem',
      fontWeight: 400,
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      lineHeight: '1.375em',
      // color: 'rgba(0, 0, 0, 0.54)',
    },
    button: {
      fontSize: '0.875rem',
      textTransform: 'uppercase',
      fontWeight: 500,
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      // color: 'rgba(0, 0, 0, 0.87)',
    }
  }
})

function withRoot(Component) {
  function WithRoot(props) {
    // MuiThemeProvider makes the theme available down the React tree
    // thanks to React context.
    return (
      <MuiThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...props} />
      </MuiThemeProvider>
    )
  }

  return WithRoot
}

export default withRoot

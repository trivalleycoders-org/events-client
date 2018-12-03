import React from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'


const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ff5572',
      main: '#dc0747',
      dark: '#a30021',
      contrastText: '#fff',
    },
  },
  typography: {
    h1: {
      fontSize: '5.1rem',
    },
    h2: {
      fontSize: '3.1875rem',
    },
    h3: {
      fontSize: '2.55rem',
    },
    h4: {
      fontSize: '1.3rem'
    },
    h5: {
      fontSize: '1.131rem',
    },
    h6: {
      fontSize: '1.061rem'
    },
    useNextVariants: true,
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
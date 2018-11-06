import React from 'react'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import { Button as Btn } from '@material-ui/core'
import { green, red } from '@material-ui/core/colors'


/* Dev */
// eslint-disable-next-line
import { green as grn } from 'logger'

/*
    - color: (primary|secondary|green|red)
    - disabled: (true|false)
    - size: (small|medium|large)

*/


const Button = (props) => {
  // grn('Button: props', props)
  const { classes, color, children, onClick, disabled } = props

  const getBtnClass = () => {
    if (color === 'green') {
      return classes.btnGreen
    } else if ( color === 'red') {
      return classes.btnRed
    } else if ( color === 'primary') {
      return classes.btnPrimary
    } else if ( color === 'secondary') {
      return classes.btnSecondary
    }

  }
  const getMUIColor = () => {
    if (color === 'primary') {
      return 'primary'
    } else if (color === 'secondary') {
      return 'secondary'
    } else {
      return ''
    }
  }
  return (
    <Btn
        variant='contained'
        color={getMUIColor()}
        className={classNames(classes.margin, getBtnClass())}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </Btn>
  )
}
const styles = theme => ({
  btnPrimary: {
    '&:disabled': {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.primary.contrastText,
    }
  },
  btnSecondary: {
    '&:disabled': {
      backgroundColor: theme.palette.secondary.light,
      color: theme.palette.secondary.contrastText,
    }
  },
  btnGreen: {
    color: theme.palette.getContrastText(green[500]),
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  },
  btnRed: {
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500],
    '&:hover': {
      backgroundColor: red[700],
    },
  },
  // secondary: {
  //   main: '#dc0747',
  //     dark: '#a30021',

  // },
  margin: {
    margin: theme.spacing.unit,
  },
})

export default withStyles(
  styles,
  { withTheme: true}
)(Button)
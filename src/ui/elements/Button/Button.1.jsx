import React from 'react'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import { Button as Btn } from '@material-ui/core'
import { green, red } from '@material-ui/core/colors'


/* Dev */
// eslint-disable-next-line
import { green as grn } from 'logger'

const Button = (props) => {
  const { classes, color, children, onClick } = props
  const getBtnClass = () => {
    return color === 'green'
      ? classes.btnGreen
      : classes.btnRed
  }
  return (
    <Btn
        variant="contained"
        color="primary"
        className={classNames(classes.margin, getBtnClass())}
        onClick={onClick}
      >
        {children}
      </Btn>
  )
}
/*
      <Button
        variant="contained"
        color="primary"
        className={classNames(classes.margin, classes.cssRoot)}
      >
        Custom CSS
      </Button>
*/
const styles = theme => ({
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
  margin: {
    margin: theme.spacing.unit,
  },
})

export default withStyles(
  styles,
  // { withTheme: true}
)(Button)
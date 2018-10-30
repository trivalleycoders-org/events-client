import React from 'react'
import { withStyles } from '@material-ui/core'
import { Typography } from '@material-ui/core'

const A = ({ classes, children, color}) => {

  return (
    <Typography
      variant='h4'
      align='center'
      color={color}
      className={classes.heading}
    >
      {children}
    </Typography>
  )
}

const styles = theme => ({
  heading: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,

  }
})

export default withStyles(styles)(A)

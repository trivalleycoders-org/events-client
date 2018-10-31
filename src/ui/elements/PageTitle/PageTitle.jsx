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
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit * 3,

  }
})

export default withStyles(styles)(A)

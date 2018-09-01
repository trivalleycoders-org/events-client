import React from 'react'
import { withStyles } from '@material-ui/core/styles'

const PageMessage = ({ classes, children, variant }) => {
  return (
    <div className={classes.root}>
      {children}
    </div>
  )
}

const styles = {
  root: {
    width: '100%',
  }
}
export default withStyles(styles)(PageMessage)
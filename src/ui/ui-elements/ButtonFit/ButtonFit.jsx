import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'

const ButtonFit = ({ classes, children }) => {
  return (
    <Button
      // variant='contained'
      // color='primary'
      className={classes.fit}
    >
      {children}
    </Button>
  )
}

const styles = {
  fit: {
    height: '100%',
    width: '100%',
    padding: 0,
    minWidth: 0,
  },
}

export default withStyles(styles)(ButtonFit)
import React from 'react'
import { Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const PastEvent = ({ classes, event }) => {
  return (
    event === {}
    ? <div>
        <Typography variant='display1' className={classes.pastEvent}>
          This event is in the past
        </Typography></div>
    : null
  )
}

const styles = theme => ({
  pastEvent: {
    backgroundColor: theme.palette.error.dark,
    color: theme.palette.error.contrastText,
  }
})

export default withStyles(styles)(PastEvent)

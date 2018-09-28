import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Toolbar from './Toolbar'

/* Dev */
// eslint-disable-next-line
import { green } from 'logger'

const EventDetails = (props) => {
  green('EventDetails: props', props)
  return (
    <div>
      <Toolbar />
      <h1>Event Details</h1>
    </div>
  )
}

const styles = {}

export default withStyles(styles)(EventDetails)
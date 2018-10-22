import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

/* Dev */
// eslint-disable-next-line
import { green } from 'logger'

const EventDetails = ({ event }) => {
  // const handleDeleteClick = () => {

  // }
  return (
    <div id='EventDetails'>
      <div>
        <p><b>DATE AND TIME</b></p>
        <p>{event.dates.startDateTime}</p>
        <p>{event.dates.endDateTime}</p>
        <p><b>Location</b></p>
        <p>{event.venueName}</p>
        <p>{event.location.cityName}</p>
        <p>{event.location.stateCode}</p>
      </div>
    </div>
  )

}

const styles = {}

export default withStyles(styles)(EventDetails)



import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Toolbar from './Toolbar'

/* Dev */
// eslint-disable-next-line
import { green } from 'logger'

const EventDetails = ({ event, eventId }) => {

  const handleDeleteClick = () => {

  }

  return (
    <div>
      <Toolbar id={event._id} />
      <h1>Event Details</h1>
      <div>
        <p><b>title:</b> {event.title}</p>
        <p><b>id:</b> {event._id}</p>
      </div>
      <p>This component is waiting to be worked on. The toolbar will have the edit and delete icons. The Edit link is temporary.</p>
      <p>We need to create an IconButton that is a React Router Link. It will be similar to ButtonNavLink but will use Link instead of NavLink. See issue #122.</p>
    </div>
  )
}

const styles = {}

export default withStyles(styles)(EventDetails)
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
        <p><b>title:</b> {event.title}</p>
        <p><b>id:</b> {event._id}</p>
      </div>
      <Link to={`/edit-event/${event._id}`}>Edit</Link>
      <p>This component is waiting to be worked on. The toolbar will have the edit and delete icons. The Edit link is temporary.</p>
      <p>We need to create an IconButton that is a React Router Link. It will be similar to ButtonNavLink but will use Link instead of NavLink. See issue #122.</p>
    </div>
  )

}

const styles = {}

export default withStyles(styles)(EventDetails)



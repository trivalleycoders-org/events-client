import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import * as eventSelectors from 'store/selectors/events-selectors'
import Toolbar from './Toolbar'

/* Dev */
// eslint-disable-next-line
import { green } from 'logger'

const EventDetails = ({ event }) => {
  green('EventDetails: event', event)
  // const handleDeleteClick = () => {

  // }
  return (
  <div>
    <Toolbar id={event._id} />
    <h1>Event Details</h1>
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



const mapStateToProps = (state, ownProps) => {
  green('EventDetails: ownProps', ownProps.match)
  const eventId = ownProps.match.params.id
  return {
    event: eventSelectors.getEventById(state, eventId)
  }
}

export default compose(
  withStyles(styles),
  connect(mapStateToProps)
)(EventDetails)



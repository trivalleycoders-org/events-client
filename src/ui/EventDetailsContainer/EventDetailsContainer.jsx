import React from 'react'
import { connect } from 'react-redux'
import { getEventById } from 'store/selectors/events-selectors'
import { eventDeleteOneRequest } from 'store/actions/event-actions'
import EventDetails from './EventDetails'
import Toolbar from './Toolbar'

/* Dev */
// eslint-disable-next-line
import { green } from 'logger'

class EventDetailsContainer extends React.Component {

  deleteEvent = (id) => {
    this.props.eventDeleteOneRequest(id)
  }
  render() {
    const { event } = this.props
    console.log('event in container: ', event)
    return (
      <div id='EventDetailsContainer'>
        <Toolbar id={event._id} title={event.title} />
        <EventDetails
          event={event}
        />
      </div>
    )
  }
}

const mstp = (state, ownProps) => {
  const eventId = ownProps.match.params.id
  return {
    event: getEventById(state, eventId)
  }
}

export default connect(
  mstp,
  { eventDeleteOneRequest }
)(EventDetailsContainer)

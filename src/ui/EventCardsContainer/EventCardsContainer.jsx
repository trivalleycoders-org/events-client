import React from 'react'
import { connect } from 'react-redux'
import { eventsReadRequest } from 'store/actions/event-actions'
import { getAllEvents } from 'store/selectors/events-selectors'
import EventCards from './EventCards'

// eslint-disable-next-line
import { green } from 'logger'

class EventCardsContainer extends React.Component {

  componentDidMount() {
    this.props.eventsReadRequest()
  }

  render() {
    return (
      <EventCards
        events={this.props.events}
      />
    )
  }

}

const mstp = (state, ownProps) => {
  return {
    events: getAllEvents(state),
  }
}

export default connect(
    mstp,
    { eventsReadRequest }
)(EventCardsContainer)
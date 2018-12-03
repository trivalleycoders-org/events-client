import React from 'react'
import { connect } from 'react-redux'
import { getAllEvents } from 'store/selectors/events-selectors'
import EventCards from 'ui/EventCards'

class EventCardsContainer extends React.Component {

  render() {
    const { events } = this.props

    return (
      <div id='EventCardsContainer'>
        <EventCards
          events={events}
        />
      </div>
    )
  }

}

const mstp = (state) => {
  return {
    events: getAllEvents(state),
  }
}

export default connect(
  mstp
)(EventCardsContainer)

import React from 'react'
import { connect } from 'react-redux'
import { getAllEvents } from 'store/selectors/events-selectors'
import EventCards from 'ui/EventCards'

// eslint-disable-next-line
import { green } from 'logger'

class EventCardsContainer extends React.Component {

  render() {
    return (
      <EventCards
        events={this.props.events}
      />
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
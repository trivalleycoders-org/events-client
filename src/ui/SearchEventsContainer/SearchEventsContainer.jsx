import React from 'react'
import { connect } from 'react-redux'
import { getAllEvents } from 'store/selectors/events-selectors'
import EventCards from 'ui/EventCards'

/* Dev */
// eslint-disable-next-line
import { green } from 'logger'

class SearchEventsContainer extends React.Component {

  render() {
    const { events } = this.props
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
  mstp,
)(SearchEventsContainer)

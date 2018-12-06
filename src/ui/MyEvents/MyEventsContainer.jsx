import React from 'react'
import { connect } from 'react-redux'
import { getAllEvents } from 'store/selectors/events-selectors'
import MyEvents from './MyEvents'

class MyEventsContainer extends React.Component {
  render() {
    const { events } = this.props
    return (
      <MyEvents
        events={events}
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
)(MyEventsContainer)
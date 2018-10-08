import React from 'react'
import { connect } from 'react-redux'
import { eventsForUserReadRequest } from 'store/actions/event-actions'
import { getAllEvents } from 'store/selectors/events-selectors'
import MyEvents from './MyEvents'

// eslint-disable-next-line
import { green } from 'logger'

class MyEventsContainer extends React.Component {

  componentDidMount() {
    this.props.eventsForUserReadRequest()
  }

  render() {
    return (
      <MyEvents
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
    { eventsForUserReadRequest }
)(MyEventsContainer)
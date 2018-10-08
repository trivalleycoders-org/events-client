import React from 'react'
import { connect } from 'react-redux'
import { getAllEvents } from 'store/selectors/events-selectors'
import { getUserId } from 'store/selectors/auth-selectors'
import MyEvents from './MyEvents'

// eslint-disable-next-line
import { green, orange } from 'logger'

const componentName = 'MyEventsContainer'
const log = true

class MyEventsContainer extends React.Component {

  async componentDidMount() {
    // green('MyEventsContainer: props', this.props)
    log && orange(`${componentName} - Mount`)
  }

  render() {
    // green('MyEventsContainer: props', this.props)
    log && orange(`${componentName} - Render`)
    const { events } = this.props
    console.assert(events.length === 9, {
      component: componentName,
      msg: `events.length should be 9 but is ${events.length}`
    })
    return (
      <div>
        <p>number of events is {events.length}</p>
        <MyEvents
          events={events}
        />
      </div>
    )
  }

}

const mstp = (state, ownProps) => {
  return {
    events: getAllEvents(state),
    currentUserId: getUserId(state)
  }
}

export default connect(
    mstp,
)(MyEventsContainer)
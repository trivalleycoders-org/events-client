import React from 'react'
import { connect } from 'react-redux'
import { getAllEvents } from 'store/selectors/events-selectors'
// import { getUserId } from 'store/selectors/auth-selectors'
import MyEvents from './MyEvents'
import ContentNotice from 'ui/ui-elements/ContentNotice'

// eslint-disable-next-line
import { green, orange, red } from 'logger'

const componentName = 'MyEventsContainer'
const log = true

class MyEventsContainer extends React.Component {

  componentDidMount() {
    log && orange(`${componentName} - Mount - START`)

    // const { eventsForUserReadRequest, currentUserId } = this.props
    // green('MyEventsContainer: props', this.props)
    // if (!currentUserId) { red(`${componentName} - currentUserId`, currentUserId)}
    // green(`${componentName}: prop`, 'eventsForUserReadRequest - start')
    // await eventsForUserReadRequest(currentUserId)
    // green(`${componentName}: prop`, 'eventsForUserReadRequest - end')

    log && orange(`${componentName} - Mount - END`)

  }

  componentDidUpdate() {
    log && orange(`${componentName} - Update - START`)

    log && orange(`${componentName} - Update - END`)
  }

  render() {
    // green('MyEventsContainer: props', this.props)
    // log && orange(`${componentName} - Render`)
    const { events } = this.props
    // console.assert(events.length === 9, {
    //   component: componentName,
    //   msg: `events.length should be 9 but is ${events.length}`
    // })
    return (
      <div id='MyEventsContainer'>
        <ContentNotice>
          {`${events.length} Events`}
        </ContentNotice>
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
    // currentUserId: getUserId(state)
  }
}

export default connect(
    mstp,
)(MyEventsContainer)
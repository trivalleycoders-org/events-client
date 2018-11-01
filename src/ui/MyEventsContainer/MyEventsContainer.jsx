import React from 'react'
import { connect } from 'react-redux'
import { getAllEvents } from 'store/selectors/events-selectors'
import MyEvents from './MyEvents'
import ContentNotice from 'ui/elements/ContentNotice'

// eslint-disable-next-line
import { green, orange, red, purple } from 'logger'
import { logRender } from 'logging'

class MyEventsContainer extends React.Component {

  render() {

    logRender && purple('MyEventsContainer - render')

    const { events } = this.props
    return (
      <div id='MyEventsContainer'>
        {/* <ContentNotice>
          {`${events.length} Events`}
        </ContentNotice> */}
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
  }
}

export default connect(
    mstp,
)(MyEventsContainer)
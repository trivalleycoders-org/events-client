import React from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import { Paper } from '@material-ui/core'
import { compose } from 'recompose'

import PageTitle from 'ui/elements/PageTitle'
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
    const { classes, event } = this.props
    console.log('event in container: ', event)
    return (
      <div className={classes.wrapper}>
        <PageTitle>
          Event Details
        </PageTitle>
        <Toolbar id={event._id} title={event.title} />
        <EventDetails
          event={event}
        />
      </div>
    )
  }
}

const styles = theme => ({
  wrapper: {
    marginTop: '1em',
  }
})

const mstp = (state, ownProps) => {
  const eventId = ownProps.match.params.id
  return {
    event: getEventById(state, eventId)
  }
}

export default compose(
  withStyles(styles),
  connect(mstp, { eventDeleteOneRequest }),
)(EventDetailsContainer)

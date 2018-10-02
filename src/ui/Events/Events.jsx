import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import {
  Typography,
} from '@material-ui/core'

/* User */
import * as eventActions from 'store/actions/event-actions'
import * as eventsSelectors from '../../store/selectors/events-selectors'
import * as requestSelectors from '../../store/selectors/request-selectors'
import * as authSelectors from 'store/selectors/auth-selectors'
import { eventsReadRequestKey } from 'store/actions/event-actions'
import EventCards from 'ui/EventCards'
import EventDetails from 'ui/EventDetails'
import MyEvents from 'ui/MyEvents'

/* Dev */
// eslint-disable-next-line
import { green } from 'logger'

const styles = theme => ({
  pageMock: {
    marginTop: 100,
  }
})

class Events extends React.Component {

  componentDidMount() {
    this.props.eventsReadRequest('Events')
  }

  render() {
    const { classes, events, match } = this.props

    if (this.props.requestReadAllEvents.status !== 'success') {
      return (
        <Typography variant='display1'>
          Loading
        </Typography>
      )
    }
    if (match.path === '/my-events') {
      return (
        <div className={classes.pageMock}>
          <MyEvents events={events} />
        </div>
      )
    } else if (match.path === '/event-details') {
      return (
        <div className={classes.pageMock}>
          <EventDetails events={events}/>
        </div>
      )
    } else {
      return (
        <div className={classes.pageMock}>
          <EventCards events={events}/>
        </div>
      )
    }
  }
}

Events.propTypes = {
  classes: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
  return {
    events: eventsSelectors.getAllEvents(state),
    requestReadAllEvents: requestSelectors.getRequest(state, eventsReadRequestKey),
    currentUserId: authSelectors.getUserId(state),
  }
}

export default compose(
  withStyles(styles),
  connect(mapStateToProps, eventActions)
)(Events)

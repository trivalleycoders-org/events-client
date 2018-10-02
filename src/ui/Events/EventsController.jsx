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
import EventForm from 'ui/EventForm'
import { mergeAll, path } from 'ramda'
import isBefore from 'date-fns/isBefore'

/* Dev */
// eslint-disable-next-line
import { green } from 'logger'

const reEventDetails = /^\/event-details/
const reNewEvent = /^\/new-event/
const reEditEvent = /^\/edit-event/


const styles = theme => ({
  pageMock: {
    marginTop: 100,
  }
})

const getEventsForUser = (events, userId) => {
  green('getEventsForUser: events', events)
  green('getEventsForUser: userId', userId)
  const ret =  events.filter(e => e.userId === userId)
  green('getEventsForUser: ret', ret)
  return ret
}

// const pastEvent = isBefore(startDate, new Date())
// pastEvent,

const shapeEditData = (event) => {
  const startDate = path(['dates', 'startDateTime'], event)
  const free = path(['free'], event) === undefined ? false :  true
  return {
    free: free,
    initialValues: event,

  }
}

const getOneEvent = (events, eventId) => {
  const e = events.find(e => e._id === eventId)
  return shapeEditData(e)
}

class Events extends React.Component {
  state = {
    goBack: this.props.history.goBack,
  }

  componentDidMount() {
    this.props.eventsReadRequest('Events')
  }

  eventCreate = () => {
    green('** EventsController.eventCreate')
    this.goBack()
  }

  eventDelete = () => {
    green('** EventsController.eventDelete')
    this.goBack()
  }

  eventUpdate = () => {
    green('** EventsController.eventUpdate')
    this.goBack()
  }

  goBack = () => {
    this.state.goBack()
  }

  render() {
    const { classes, events, match, currentUserId } = this.props
    const eventId = match.params.id
    // green('Events: history', this.props.history)
    // green('Events: location', this.props.location)
    // green('Events: match', this.props.match)
    if (this.props.requestReadAllEvents.status !== 'success') {
      return (
        <Typography variant='display1'>
          Loading
        </Typography>
      )
    }
    if (match.path === '/my-events') {
      green('EventsController - my-events')
      return (
        <div className={classes.pageMock}>
          <MyEvents
            events={getEventsForUser(events, currentUserId)}
            eventCreate={this.eventCreate}
          />
        </div>
      )
    } else if (reEventDetails.test(match.path)) {
      return (
        <div className={classes.pageMock}>
          <EventDetails
            event={getOneEvent(events, eventId)}
            eventCreate={this.eventCreate}
            eventDelete={this.eventDelete}
          />
        </div>
      )
    } else if (reNewEvent.test(match.path)) {
      return (
        <div className={classes.pageMock}>
          <EventForm
            // event={getOneEvent(events, eventId)}
            eventCreate={this.eventCreate}
            eventDelete={this.eventDelete}
            goBack={this.goBack}
          />
        </div>
      )
    } else if (reNewEvent.test(match.path)) {
      return (
        <div className={classes.pageMock}>
          <EventForm
            event={getOneEvent(events, eventId)}
            eventUpdate={this.eventUpdate}
            eventDelete={this.eventDelete}
            goBack={this.goBack}
          />
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

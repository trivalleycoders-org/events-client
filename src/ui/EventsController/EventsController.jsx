import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import {
  Typography,
} from '@material-ui/core'
import { mergeAll, path } from 'ramda'
import isBefore from 'date-fns/isBefore'

/* User */
import * as eventActions from 'store/actions/event-actions'
import * as eventsSelectors from 'store/selectors/events-selectors'
import * as requestSelectors from 'store/selectors/request-selectors'
import * as authSelectors from 'store/selectors/auth-selectors'
import { eventsReadRequestKey } from 'store/actions/event-actions'
import EventCards from './EventCards'
import EventDetails from './EventDetails'
import MyEvents from './MyEvents'
import EventForm from './EventForm'
import { EDIT_MODE, CREATE_MODE } from './EventForm'


/* Dev */
// eslint-disable-next-line
import { green } from 'logger'

const reEventDetails = /^\/event-details/
const reNewEvent = /^\/new-event/
const reEditEvent = /^\/edit-event/

const getEventsForUser = (events, userId) => {
  // green('getEventsForUser: events', events)
  // green('getEventsForUser: userId', userId)
  const ret =  events.filter(e => e.userId === userId)
  // green('getEventsForUser: ret', ret)
  return ret
}

const pastEvent = (event) => {
  const startDate = path(['dates', 'startDateTime'], event)
  return isBefore(startDate, new Date())

}

const shapeEditDataIn = (event) => {

  const free = path(['free'], event) === undefined ? false :  true
  return {
    free: free,
    initialValues: event,
  }
}

const shapeEditDataOut = (formValues, currentUserId) => {
  const mergedData = mergeAll([
    formValues,
    {userId: currentUserId}
  ])
  return mergedData
}

const getOneEvent = (events, eventId) => {
  return events.find(e => e._id === eventId)
}

const getOneEventForEdit = (events, eventId) => {
  const e = getOneEvent(events, eventId)
  return shapeEditDataIn(e)
}

class Events extends React.Component {
  state = {
    goBack: this.props.history.goBack,
  }

  componentDidMount() {
    this.props.eventsReadRequest('Events')
  }

  eventCreate = (formValues) => {
    // green('** EventsController.eventCreate')
    const data = shapeEditDataOut(formValues)
    this.props.eventCreateRequest(data)
    this.goBack()
  }

  eventDelete = () => {
    // green('** EventsController.eventDelete')
    this.goBack()
  }

  eventUpdate = (formValues) => {
    // green('** EventsController.eventUpdate')
    const data = shapeEditDataOut(formValues)
    this.props.eventUpdateOneRequest(data)
    this.goBack()
  }

  goBack = () => {
    this.state.goBack()
  }

  render() {
    const { classes, events, match, currentUserId } = this.props
    const eventId = match.params.id
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
            eventDelete={this.eventDelete}
            goBack={this.goBack}
          />
        </div>
      )
    } else if (reNewEvent.test(match.path)) {
      return (
        <div className={classes.pageMock}>
          <EventForm
            eventCreate={this.eventCreate}
            goBack={this.goBack}
            mode={CREATE_MODE}
          />
        </div>
      )
    } else if (reEditEvent.test(match.path)) {
      green('EventsConroller: eventId', eventId)
      return (
        <div className={classes.pageMock}>
          <EventForm
            event={getOneEventForEdit(events, eventId)}
            eventUpdate={this.eventUpdate}
            goBack={this.goBack}
            mode={EDIT_MODE}
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

const styles = theme => ({
  pageWrapper: {
    padding: '20px',
  },
})

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

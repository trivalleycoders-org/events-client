import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import * as eventSelectors from 'store/selectors/events-selectors'
import EventForm from './EventForm'
import { path } from 'ramda'
/* User */


/* Dev */
// eslint-disable-next-line
import { green } from 'logger'

export const EDIT_MODE = 'edit-mode'
export const CREATE_MODE = 'create-mode'

const shapeEditDataIn = (event) => {
  const free = path(['free'], event) === undefined ? false :  true
  return {
    free: free,
    initialValues: event,
  }
}

const getOneEventById = (events, eventId) => {
  const r = events.find(e => e._id === eventId)
  return r
}

const getOneEventForEdit = (events, eventId) => {
  green('events', events)
  green('eventId', eventId)
  const e = getOneEventById(events, eventId)
  return shapeEditDataIn(e)
}

const EventFormController = (props) => {

  const { event, eventId } = props
  green('EventFormController.props', props)
  return (
    <React.Fragment>
      <EventForm
        event={getOneEventForEdit(event, eventId)}
      />
    </React.Fragment>
  )
}

const mstp = (state, ownProps) => {
  green('EventFormController: ownProps', ownProps)
  const eventId = ownProps.match.params.id
  // green('EventForm: eventId', eventId)
  return {
    event: eventSelectors.getEventById(state, eventId),
    eventId,
  }
}
export default compose(
  connect(mstp)
)(EventFormController)

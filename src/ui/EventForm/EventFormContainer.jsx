import React from 'react'
import { connect } from 'react-redux'
import { eventCreateOneRequest, eventUpdateOneRequest } from 'store/actions/event-actions'
import { getEventById } from 'store/selectors/events-selectors'
import { getUserId } from 'store/selectors/auth-selectors'
import { mergeAll, path } from 'ramda'
import { hasProp } from 'lib/hasProp'
import EventForm from './EventForm'

export const EDIT_MODE = 'edit-mode'
export const CREATE_MODE = 'create-mode'

const shapeEditDataIn = (event) => {
  const free = path(['free'], event) === undefined ? false : true
  const r = {
    free: free,
    ...event
  }
  return r
}

const shapeEditDataOut = (formValues, currentUserId) => {
  const mergedData = mergeAll([
    formValues,
    { userId: currentUserId }
  ])
  return mergedData
}

class EventFormContainer extends React.Component {

  eventCreate = (formValues) => {
    const data = shapeEditDataOut(formValues, this.props.userId)
    this.props.eventCreateOneRequest(data)
    this.goBack()
  }

  eventUpdate = (formValues) => {
    const data = shapeEditDataOut(formValues)
    this.props.eventUpdateOneRequest(data)
    this.goBack()
  }

  goBack = () => {
    this.props.history.goBack()
  }

  render() {
    const { event } = this.props
    const hasEvent = hasProp('event', this.props) ? true : false
    const mergedEvent = hasEvent ? shapeEditDataIn(event) : {}
    
    return (
      <EventForm
        event={mergedEvent}
        eventCreate={this.eventCreate}
        eventUpdate={this.eventUpdate}
        mode={hasEvent ? EDIT_MODE : CREATE_MODE}
        goBack={this.goBack}
      />
    )
  }

}

const mstp = (state, ownProps) => {
  const eventId = ownProps.match.params.id
  return {
    event: getEventById(state, eventId),
    userId: getUserId(state),
    eventId,
  }
}

export default connect(
  mstp,
  { eventCreateOneRequest, eventUpdateOneRequest },
)(EventFormContainer)
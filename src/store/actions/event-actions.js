import { createRequestThunk, logError } from './action-helpers'
import api from 'api'
import { orange } from 'logger'


// Create
export const keyCreateEvent = 'actionKeyCreateEvent'
export const requestKeyCreateEvent = 'requestKeyCreateEvent'

const createNewEvent = (event) => ({
  type: keyCreateEvent,
  payload: { event },
})

export const requestCreateEvent = createRequestThunk({
  request: api.events.create,
  key: requestKeyCreateEvent,
  success: [ createNewEvent ],
  failure: [ error => logError(error, requestKeyCreateEvent) ]
})

// Read
export const keyReadEvents = 'actionKeyReadEvents'
export const requestKeyReadEvents = 'requestKeyReadEvents'

const readEvents = (events) => {
  return ({
    type: keyReadEvents,
    payload: events, // events is already an object?
  })
}

export const requestReadEvents = createRequestThunk({
  request: api.events.read,
  key: requestKeyReadEvents,
  success: [ readEvents ],
  failure: [ error => logError(error, requestKeyReadEvents) ]
})

// EventsUi
export const keySetEdit_id = 'actionKeySetEdit_id'

export const setEdit_id = (_id) => {
  orange('event-actions.setEdit_id: _id', _id)
  return ({
    type: keySetEdit_id,
    payload: { _id }
  })
}

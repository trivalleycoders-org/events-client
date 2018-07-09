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

const readEvents = (events) => {
  return ({
    type: keyReadEvents,
    payload: events, // events is already an object?
  })
}

export const requestKeyReadEvents = 'requestKeyReadEvents'

export const requestReadEvents = createRequestThunk({
  request: api.events.read,
  key: requestKeyReadEvents,
  success: [ readEvents ],
  failure: [ error => logError(error, requestKeyReadEvents) ]
})

// Patch
export const keyPatchOneEvent = 'requestKeyPatchOneEvent'

const patchOneEvent = (event) => {
  orange('patchOneEvent: event', event)
  return ({
    type: keyPatchOneEvent,
    payload: { event },
  })
}

export const requestKeyPatchOneEvent = 'requestKeyPatchOneEvent'

export const requestPatchOneEvent = createRequestThunk({
  request: api.events.patch,
  key: requestKeyPatchOneEvent,
  success: [ patchOneEvent ],
  failure: [ error => logError(error, requestKeyPatchOneEvent) ]
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

export const keyUnsetEdit_id = 'actionKeyUnsetEdit_id'

export const unsetEdit_id = () => {
  orange('event-actions.unsetEdit_id')
  return ({
    type: keyUnsetEdit_id,
  })
}

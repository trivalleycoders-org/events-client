import { createRequestThunk, logError } from './action-helpers'
import api from 'api'
import { setToast } from './toast-actions'
/* Dev */
import { orange } from 'logger'


// Create
export const keyCreateEvent = 'actionKeyCreateEvent'
export const requestKeyCreateEvent = 'requestKeyCreateEvent'
export const keySearchEvent = 'actionKeySearchEvent'
export const requestKeySearchEvents = 'requestKeySearchEvents'
export const keySetEvents = 'actionKeySetEvents'


export const createNewEvent = (event) => {
  // orange('action.createNewEvent: event', event)
  return ({
    type: keyCreateEvent,
    payload: { event },
  })
}

export const requestCreateEvent = createRequestThunk({
  request: api.events.create,
  key: requestKeyCreateEvent,
  success: [createNewEvent],
  failure: [() => setToast('Couldn\'t add note', 'warn')],
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
  success: [readEvents],
  failure: [error => logError(error, requestKeyReadEvents)]
})

// Patch
export const keyPatchOneEvent = 'keyPatchOneEvent'

const patchOneEvent = (event) => {
  orange('event-actions.patchOneEvent: event', event)
  return ({
    type: keyPatchOneEvent,
    payload: { event },
  })
}

export const requestKeyPatchOneEvent = 'requestKeyPatchOneEvent'

export const requestPatchOneEvent = createRequestThunk({
  request: api.events.patch,
  key: requestKeyPatchOneEvent,
  success: [patchOneEvent],
  failure: [error => logError(error, requestKeyPatchOneEvent)]
})

// Delete

export const keyDeleteOneEvent = 'keyDeletehOneEvent'

const deleteOneEvent = (event) => {
  orange('event-actions.deleteOneEvent: event', event)
  return ({
    type: keyDeleteOneEvent,
    payload: event,
  })
}

export const requestKeyDeleteOneEvent = 'requestKeyDeleteOneEvent'

export const requestDeleteOneEvent = createRequestThunk({
  request: api.events.delete,
  key: requestKeyDeleteOneEvent,
  success: [ deleteOneEvent ],
  failure: [ error => logError(error, requestKeyDeleteOneEvent) ]
})

// EventsUi
export const keySetEdit_id = 'actionKeySetEdit_id'

export const setEdit_id = (_id) => {
  // orange('event-actions.setEdit_id: _id', _id)
  return ({
    type: keySetEdit_id,
    payload: { _id }
  })
}

export const keyUnsetEdit_id = 'actionKeyUnsetEdit_id'

export const unsetEdit_id = () => {
  // orange('event-actions.unsetEdit_id')
  return ({
    type: keyUnsetEdit_id,
  })
}

export const setEvents = (events) => {
  // orange('readEvents', events)
  return ({
    type: keySetEvents,
    payload: events, // events is already an object?
  })
}

export const requestSearchEvents = createRequestThunk({
  request: api.events.search,
  key: requestKeySearchEvents,
  success: [setEvents],
  failure: [error => logError(error, requestKeySearchEvents)]
})

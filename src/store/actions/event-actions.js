import { createRequestThunk, logError } from './action-helpers'
import api from 'api'
import { setToast } from './toast-actions'
/* Dev */
// eslint-disable-next-line
import { orange } from 'logger'


// export const keySearchEvent = 'actionKeySearchEvent'

// Create
export const keyCreateEvent = 'actionKeyCreateEvent'
export const requestKeyCreateEvent = 'requestKeyCreateEvent'

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
export const requestKeyReadEvents = 'requestKeyReadEvents'

const readEvents = (events) => {
  return ({
    type: keyReadEvents,
    payload: { events },
  })
}

export const requestReadEvents = createRequestThunk({
  request: api.events.read,
  key: requestKeyReadEvents,
  success: [readEvents],
  failure: [error => logError(error, requestKeyReadEvents)]
})

// Search Results

// export const keySetEvents = 'actionKeySetEvents'
export const requestKeySearchEvents = 'requestKeySearchEvents'

// export const setEvents = (data) => {
//   // orange('readEvents', events)
//   return ({
//     type: keySetEvents,
//     payload: { data }, // events is already an object?
//   })
// }

export const requestSearchEvents = createRequestThunk({
  request: api.events.search,
  key: requestKeySearchEvents,
  success: [readEvents],
  failure: [error => logError(error, requestKeySearchEvents)]
})

// Patch
export const keyPatchOneEvent = 'keyPatchOneEvent'
export const requestKeyPatchOneEvent = 'requestKeyPatchOneEvent'

const patchOneEvent = (data) => {
  // orange('event-actions.patchOneEvent: event', event)
  return ({
    type: keyPatchOneEvent,
    payload: { data },
  })
}

export const requestPatchOneEvent = createRequestThunk({
  request: api.events.patch,
  key: requestKeyPatchOneEvent,
  success: [patchOneEvent],
  failure: [error => logError(error, requestKeyPatchOneEvent)]
})

// Delete
export const keyDeleteOneEvent = 'keyDeletehOneEvent'
export const requestKeyDeleteOneEvent = 'requestKeyDeleteOneEvent'

const deleteOneEvent = (data) => {
  // orange('event-actions.deleteOneEvent: event', event)
  return ({
    type: keyDeleteOneEvent,
    payload: data,
  })
}

export const requestDeleteOneEvent = createRequestThunk({
  request: api.events.delete,
  key: requestKeyDeleteOneEvent,
  success: [deleteOneEvent],
  failure: [error => logError(error, requestKeyDeleteOneEvent)]
})

// EventsUi
export const keySetEdit_id = 'actionKeySetEdit_id'
export const keyUnsetEdit_id = 'actionKeyUnsetEdit_id'

export const setEdit_id = (_id) => {
  // orange('event-actions.setEdit_id: _id', _id)
  return ({
    type: keySetEdit_id,
    payload: { _id }
  })
}

export const unsetEdit_id = () => {
  // orange('event-actions.unsetEdit_id')
  return ({
    type: keyUnsetEdit_id,
  })
}
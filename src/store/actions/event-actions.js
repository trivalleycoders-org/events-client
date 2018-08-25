import { createRequestThunk, logError } from './action-helpers'
import api from 'api'
import { setSnackbar } from './snackbar-actions'
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
  success: [createNewEvent, () => setSnackbar('Event added', 'success')],
  failure: [() => setSnackbar('Couldn\'t add note', 'warn')],
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
  success: [readEvents, () => setSnackbar('Events loaded', 'success')],
  failure: [(error) => setSnackbar('Could not get events', 'error')]
})

// Search Results

export const requestKeySearchEvents = 'requestKeySearchEvents'

export const requestSearchEvents = createRequestThunk({
  request: api.events.search,
  key: requestKeySearchEvents,
  success: [readEvents],
  failure: [error => setSnackbar(`Search events failed: ${error}`, 'error')]
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
  success: [patchOneEvent, () => setSnackbar('Event updated', 'success')],
  failure: [error => logError(`Could not update event: ${error}`, 'error')]
})

// Delete
export const keyDeleteOneEvent = 'keyDeletehOneEvent'
export const requestKeyDeleteOneEvent = 'requestKeyDeleteOneEvent'

const deleteOneEvent = (data) => {
  // orange('event-actions.deleteOneEvent: data', data)
  return ({
    type: keyDeleteOneEvent,
    payload: data,
  })
}

export const requestDeleteOneEvent = createRequestThunk({
  request: api.events.delete,
  key: requestKeyDeleteOneEvent,
  success: [deleteOneEvent, () => setSnackbar('Event deleted', 'success')],
  failure: [error => setSnackbar(`Could not delete event: ${error}`)]
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
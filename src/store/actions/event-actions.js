import { createRequestThunk, logError } from './action-helpers'
import api from 'api'
import { snackbarSet } from './snackbar-actions'
import { pageMessage } from './page-message-actions'

/* Dev */
// eslint-disable-next-line
import { orange, red } from 'logger'

// Create
export const eventCreateOneKey = 'reventCreateOneKey'
export const eventCreateOneRequestKey = 'eventCreateOneRequestKey'

export const eventCreateOne = (event) => {
  return ({
    type: eventCreateOneKey,
    payload: { event },
  })
}

export const eventCreateOneRequest = createRequestThunk({
  request: api.events.createOne,
  key: eventCreateOneRequestKey,
  success: [eventCreateOne, () => snackbarSet('Event added', 'success')],
  failure: [() => snackbarSet('Couldn\'t add event', 'warn')],
})

// Read
export const eventsForUserReadKey = 'eventsForUserReadKey'
export const eventsForUserReadRequestKey = 'eventsForUserReadRequestKey'

export const eventsForUserRead = (events) => {
  return ({
    type: eventsForUserReadKey,
    payload: { events },
  })
}

export const eventsForUserReadRequest = createRequestThunk({
  request: api.events.forUserRead,
  key: eventsForUserReadRequestKey,
  success: [eventsForUserRead, () => snackbarSet('Events for user retrieved.', 'success'), () => pageMessage('')],
  failure: [(error) => snackbarSet('Could not get events', 'error')]
})

// Read
export const eventsReadKey = 'eventsReadKey'
export const eventsReadRequestKey = 'eventsReadRequestKey'

export const eventsRead = (events) => {
  return ({
    type: eventsReadKey,
    payload: { events },
  })
}

export const eventsReadRequest = createRequestThunk({
  request: api.events.read,
  key: eventsReadRequestKey,
  success: [eventsRead, () => snackbarSet('Events loaded', 'success'), () => pageMessage('')],
  failure: [(error) => snackbarSet('Could not get events', 'error'), (error) => red('request failed', error)]
})

// Patch
export const eventUpdateOneKey = 'eventUpdateOneKey'
export const eventUpdateOneRequestKey = 'eventUpdateOneRequestKey'

const eventUpdateOne = (event) => {
  return ({
    type: eventUpdateOneKey,
    payload: { event },
  })
}

export const eventUpdateOneRequest = createRequestThunk({
  request: api.events.patch,
  key: eventUpdateOneRequestKey,
  success: [eventUpdateOne, eventsReadRequest, () => snackbarSet('Event updated', 'success')],
  failure: [error => logError(`Could not update event: ${error}`, 'error')]
})

// Delete
export const eventDeleteOneKey = 'eventDeleteOneKey'
export const eventDeleteOneRequestKey = 'eventDeleteOneRequestKey'

const eventDeleteOne = (event) => {
  return ({
    type: eventDeleteOneKey,
    payload: { event },
  })
}

export const eventDeleteOneRequest = createRequestThunk({
  request: api.events.delete,
  key: eventDeleteOneRequestKey,
  success: [eventDeleteOne, () => snackbarSet('Event deleted', 'success')],
  failure: [error => snackbarSet(`Could not delete event: ${error}`)]
})

// EventsUi
export const editIdSetKey = 'editIdSetKey'
export const editIdUnsetKey = 'editIdUnsetKey'

export const editIdSet = (_id) => {
  return ({
    type: editIdSetKey,
    payload: { _id }
  })
}

export const editIdUnset = () => {
  return ({
    type: editIdUnsetKey,
  })
}
import { createRequestThunk, logError } from './action-helpers'
import api from 'api'
import { orange } from 'logger'


// Create
export const keyCreateEvent = 'actionKeyCreateEvent'
export const requestKeyCreateEvent = 'requestKeyCreateEvent'
export const keySearchEvent = 'actionKeySearchEvent'
export const requestKeySearchEvents = 'requestKeySearchEvents'
export const keySetEvents = 'actionKeySetEvents'

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
  orange('readEvents', events)
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

const setEvents = (events) => {
  orange('readEvents', events)
  return ({
    type: keySetEvents,
    payload: events, // events is already an object?
  })
}

const searchEvents = (searchTerm) => ({
  type: keySearchEvent,
  payload: { searchTerm },
  success: [ setEvents ],
  failure: [ error => logError(error, searchEvents) ]
})

export const requestSearchEvents = createRequestThunk({
  request: api.events.search,
  key: requestKeySearchEvents,
  success: [ setEvents ],
  failure: [ error => logError(error, requestKeySearchEvents) ]
})

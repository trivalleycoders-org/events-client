import { createRequestThunk, logError, logReturnValue } from './action-helpers'
import api from 'api'
import { orange } from 'logger'

export const keyCreateNewEvent = 'actionKeyCreateEvent'

export const requestKeyCreateNewEvent = 'requestKeyCreateEvent'


const createNewEvent = (event) => ({
  type: keyCreateNewEvent,
  payload: { event },
})

export const requestCreateEvent = createRequestThunk({
  request: api.events.create,
  key: requestKeyCreateNewEvent,
  success: [ createNewEvent ],
  failure: [ logError ]
})


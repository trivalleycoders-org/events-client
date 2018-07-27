import { createNewEvent } from '../../store/actions/event-actions'
import events from '../fixtures/events'
import *  as actionConstants from '../../store/actions/constants.js'

it ('should setup new event action object with provided values', () => {
  const action = createNewEvent(events.event)
  expect(action).toEqual({
    type: actionConstants.keyCreateEvent,
    payload: {...events}
  })
})
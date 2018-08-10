import { createNewEvent } from '../../store/actions/event-actions'
import events from '../fixtures/events'
import { keyCreateEvent } from '../../store/actions/event-actions'

it('should setup new event action object with provided values', () => {
  const action = createNewEvent(events.event)
  expect(action).toEqual({
    type: keyCreateEvent,
    payload: { ...events }
  })
})
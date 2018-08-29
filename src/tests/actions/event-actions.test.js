import { eventCreate } from '../../store/actions/event-actions'
import events from '../fixtures/events'
import { eventCreateKey } from '../../store/actions/event-actions'

it('should setup new event action object with provided values', () => {
  const action = eventCreate(events.event)
  expect(action).toEqual({
    type: eventCreateKey,
    payload: { ...events }
  })
})
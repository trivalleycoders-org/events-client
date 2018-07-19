import { append, insert, merge, remove } from 'ramda'
import { 
  keyCreateEvent, 
  keyDeleteOneEvent,
  keyReadEvents, 
  keyPatchOneEvent,
  keySetEdit_id,
  keyUnsetEdit_id,
} from '../actions/event-actions'

/* Dev */
// eslint-disable-next-line
import { blue } from 'logger'
import { green } from '../../logger/index'

const indexOfObjectInArray = (arr, _id) => {
  return arr.findIndex(i => i._id === _id)
}


const updateEvent = (state, newEvent) => {
  const idx = indexOfObjectInArray(state, newEvent._id)
  const oldEvent = state[idx]
  const updatedEvent = merge(oldEvent, newEvent)
  const stateRemoved = remove(idx, 1, state)
  const newState = insert(idx, updatedEvent, stateRemoved)
  return newState
}

const deleteEvent = (state, _id) => {
  const idx = indexOfObjectInArray(state, _id)
  const newState = remove(idx, 1, state)
  green('events.deleteEvent: newState', newState)
  return newState
}

export const events = (state = [], { type, payload }) => {
  switch (type) {
    case keyCreateEvent:
      // blue('keyCreateEvent', payload.event)
      // blue('createEvent state', state)
      return append(payload.event, state)
    case keyReadEvents:
      return payload.events
    case keyPatchOneEvent:
      return updateEvent(state, payload.event)
    case keyDeleteOneEvent:
      blue('reducers.keyDeletehOneEvent: payload', payload)
      // blue('reducers keyDeletehOneEvent state', state)
      return deleteEvent(state, payload.event._id)
    default:
      return state
  }
}

export const eventsUi = (state = {}, { type, payload }) => {
  // blue('reducers.eventsUi: type', type)
  // blue('reducers.eventsUi: payload', payload)
  switch (type) {
    case keySetEdit_id:
      return merge(state, {edit_id: payload._id})
    case keyUnsetEdit_id:
      return ''
    default:
      return state
  }
}

export default { events, eventsUi }
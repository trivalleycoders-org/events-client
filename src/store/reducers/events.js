import { insert, merge, remove } from 'ramda'
import { 
  keyCreateEvent, 
  keyReadEvents, 
  keyPatchOneEvent,
  keySetEdit_id,
  keyUnsetEdit_id,
} from '../actions/event-actions'
// import { blue } from 'logger'


export const events = (state = [], { type, payload }) => {
  
  
  switch (type) {
    case keyCreateEvent:
      return merge(state, payload.event)
    case keyReadEvents:
    return payload.events
    case keyPatchOneEvent:
      const oldState = state
      const newEvent = payload.event
      const idx = oldState.findIndex(e => e._id === newEvent._id)
      const oldEvent = state[idx]
      const updatedEvent = merge(oldEvent, newEvent)
      const stateRemoved = remove(idx, 1, oldState)
      const newState = insert(idx, updatedEvent, stateRemoved)
      return newState
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
import { merge } from 'ramda'
import { keyCreateEvent, keyReadEvents, keySetEdit_id } from '../actions/event-actions'
// import { blue } from 'logger'


export const events = (state = [], { type, payload }) => {

  switch (type) {
    case keyCreateEvent:
      return merge(state, payload.event)
    case keyReadEvents:
      // blue('reducers.events: payload', payload)
      return payload.events
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
    default:
      return state
  }
}

export default { events, eventsUi }

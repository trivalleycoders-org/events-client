import { merge } from 'ramda'
import { keyCreateEvent, keyReadEvents } from '../actions/event-actions'
import { blue } from 'logger'

const events = (state = [], { type, payload }) => {

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

export default events

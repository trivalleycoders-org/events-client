import { merge } from 'ramda'
import { keyCreateEvent, keyReadEvents, keySetEvents } from '../actions/event-actions'
import { blue, green } from 'logger'

const events = (state = [], { type, payload }) => {

  switch (type) {
    case keyCreateEvent:
      return merge(state, payload.event)
    case keyReadEvents:
      blue('reducers.events: payload', payload)
      return payload.events
    case keySetEvents:
      return payload.events
    default:
      return state
  }
}

export default events

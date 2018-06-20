import { merge } from 'ramda'
import { keyCreateEvent, keyReadEvents } from '../actions/event-actions'
import { blue } from 'logger'
import { cardData } from 'mock-data/card-data'


const events = (state = cardData, { type, payload }) => {

  switch (type) {
    case keyCreateEvent:
      return merge(state, payload.event)
    case keyReadEvents:
      blue('reducers.events: payload', payload)
      return payload.events
    default:
      return state
  }
}

export default events

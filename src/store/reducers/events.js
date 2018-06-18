import { merge } from 'ramda'
import { keyCreateNewEvent } from '../event-actions'
import { blue } from 'logger'
import { cardData } from 'mock-data/card-data'


const events = (state = cardData, { type, payload }) => {
  // blue('images: payload', payload)
  switch (type) {
    case keyCreateNewEvent:
      return merge(state, payload.event)
    default:
      return state
  }
}

export default events

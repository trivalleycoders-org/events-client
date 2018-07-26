import { 
  keyReadCities
} from '../actions/location-actions'

/* Dev */
// eslint-disable-next-line
import { blue } from 'logger'

export const cities = (state = [], { type, payload }) => {
  switch (type) {
    case keyReadCities:
      blue(keyReadCities, payload)
      blue('createEvent state', state)
      return payload.cities
    default:
      return state
  }
}

export default { cities }
import { 
  keyReadCities,
  keyReadPostalCodes
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

export const postalCodes = (state = [], { type, payload }) => {
  switch (type) {
    case keyReadPostalCodes:
      // blue(keyReadPostalCodes, payload)
      /// blue('postalCodes state', state)
      return payload.postalCodes
    default:
      return state
  }
}

export default { cities, postalCodes }
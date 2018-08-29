import {
  // keyReadCities,
  postalCodesReadKey
} from '../actions/location-actions'

/* Dev */
// eslint-disable-next-line
import { blue } from 'logger'

/* Cities
    - not in use but may be in future
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
*/

export const postalCodes = (state = [], { type, payload }) => {
  switch (type) {
    case postalCodesReadKey:
      return payload.postalCodes
    default:
      return state
  }
}

export default { /*cities,*/ postalCodes }
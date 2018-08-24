import { createRequestThunk, logError } from './action-helpers'
import api from 'api'
// import { setToast } from './snacmbar-actions'
/* Dev */
// eslint-disable-next-line
import { orange } from 'logger'


/* Cities
    - not in use but may be in future
// Read Cities
export const keyReadCities = 'actionKeyReadCities'

const readCities = (cities) => {
  orange('** readCities')
  return ({
    type: keyReadCities,
    payload: { cities },
  })
}

export const requestKeyReadCities = 'requestKeyReadCities'

export const requestReadCities = createRequestThunk({
  request: api.cities.read,
  key: requestKeyReadCities,
  success: [ readCities ],
  failure: [ error => logError(error, requestKeyReadCities) ]
})
*/

// Read postalCode
export const keyReadPostalCodes = 'actionKeyReadPostalCodes'
const readPostalCodes = (postalCodes) => {
  // orange('** readPostalCodes')
  return ({
    type: keyReadPostalCodes,
    payload: { postalCodes },
  })
}
export const requestKeyReadPostalCodes = 'requestKeyReadPostalCodes'
export const requestReadPostalCodes = createRequestThunk({
  request: api.postalCodes.read,
  key: requestKeyReadPostalCodes,
  success: [ readPostalCodes ],
  failure: [ error => logError(error, requestKeyReadPostalCodes) ]
})
import { createRequestThunk, logError } from './action-helpers'
import api from 'api'

/* Dev */
// eslint-disable-next-line
import { orange } from 'logger'


/* Cities
    - not in use but may be in future
// Read Cities
export const keyReadCities = 'actionKeyReadCities'

const readCities = (cities) => {
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

// Clear postalCodes
export const postalCodesClearKey = 'postalCodesClearKey'
export const postalCodesClear = () => {
  return ({
    type: postalCodesClearKey,
  })
}

// Read postalCode
export const postalCodesReadKey = 'actionKeyReadPostalCodes'
const postalCodesRead = (postalCodes) => {
  return ({
    type: postalCodesReadKey,
    payload: { postalCodes },
  })
}
export const postalCodesReadRequestKey = 'postalCodesReadRequestKey'
export const postalCodesReadRequest = createRequestThunk({
  request: api.postalCodes.read,
  key: postalCodesReadRequestKey,
  success: [ postalCodesRead ],
  failure: [ error => logError(error, postalCodesReadRequestKey) ]
})
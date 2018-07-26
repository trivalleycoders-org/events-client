import { createRequestThunk, logError } from './action-helpers'
import api from 'api'
import { setToast } from './toast-actions'
/* Dev */
// eslint-disable-next-line
import { orange } from 'logger'


// Read
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


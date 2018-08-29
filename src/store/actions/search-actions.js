import { createRequestThunk } from './action-helpers'
import api from 'api'
import { setSnackbar } from './snackbar-actions'
import { readEvents } from 'store/actions/event-actions'

/* Dev */
// eslint-disable-next-line
import { orange } from 'logger'

export const keySetSearchText = 'actionSetSearchText'
export const setSearchText = (text) => {
  return (
    {
      type: keySetSearchText,
      payload: { text },
    }
  )
}

export const keyClearSearchText = 'actionKeyClearSearchText'
export const clearSearchText = () => {
  return {
    type: keyClearSearchText,
  }
}

// Read
export const keyReadSearchEvents = 'actionKeyReadSearchEvents'
export const requestKeyReadSearchEvents = 'requestKeyReadSearchEvents'

// const readSearchEvents = (events) => {
//   return ({
//     type: keyReadSearchEvents,
//     payload: { events },
//   })
// }

export const requestKeySearchEvents = 'requestKeySearchEvents'

export const requestReadSearchEvents = () => createRequestThunk({
  request: api.events.search,
  key: requestKeySearchEvents,
  success: [readEvents],
  failure: [error => setSnackbar(`Search events failed: ${error}`, 'error')]
})

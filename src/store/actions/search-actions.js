import { createRequestThunk } from './action-helpers'
import api from 'api'
import { snackbarSet } from './snackbar-actions'
import { eventsRead } from 'store/actions/event-actions'

/* Dev */
// eslint-disable-next-line
import { orange } from 'logger'

export const searchTextSetKey = 'actionSetSearchText'
export const searchTextSet = (text) => {
  return (
    {
      type: searchTextSetKey,
      payload: { text },
    }
  )
}

export const searchTextClearKey = 'actionKeyClearSearchText'
export const searchTextClear = () => {
  return {
    type: searchTextClearKey,
  }
}

// Read
export const eventsSearchReadKey = 'actionKeyReadSearchEvents'
export const eventsSearchReadRequestKey = 'eventsSearchReadRequestKey'

// const eventsSearchRead = (events) => {
//   return ({
//     type: eventsSearchReadKey,
//     payload: { events },
//   })
// }

export const eventsSearchRequestKey = 'eventsSearchRequestKey'

export const eventsSearchReadRequest = () => createRequestThunk({
  request: api.events.search,
  key: eventsSearchRequestKey,
  success: [eventsRead],
  failure: [error => snackbarSet(`Search events failed: ${error}`, 'error')]
})

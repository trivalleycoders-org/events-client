import { createRequestThunk } from './action-helpers'
import api from 'api'
import { snackbarSet } from './snackbar-actions'
import { eventsRead } from 'store/actions/event-actions'

/* Dev */
// eslint-disable-next-line
import { orange } from 'logger'

export const searchTextSetKey = 'searchTextSetKey'
export const searchTextSet = (text) => {
  return (
    {
      type: searchTextSetKey,
      payload: { text },
    }
  )
}

export const searchTextClearKey = 'searchTextClearKey'
export const searchTextClear = () => {
  return {
    type: searchTextClearKey,
  }
}

// Read
// export const eventsSearchReadKey = 'eventsSearchReadKey'


// const eventsSearchRead = (events) => {
//   return ({
//     type: eventsSearchReadKey,
//     payload: { events },
//   })
// }


export const eventsSearchReadRequestKey = 'eventsSearchReadRequestKey'

export const eventsSearchReadRequest = createRequestThunk({
  request: api.events.search,
  key: eventsSearchReadRequestKey,
  success: [eventsRead],
  failure: [error => snackbarSet(`Search events failed: ${error}`, 'error')]
})

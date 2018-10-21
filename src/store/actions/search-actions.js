import { createRequestThunk } from './action-helpers'
import api from 'api'
import { snackbarSet } from './snackbar-actions'
import { eventsRead } from 'store/actions/event-actions'

/* Dev */
// eslint-disable-next-line
import { orange } from 'logger'

export const searchTextSetKey = 'searchTextSetKey'
export const searchTextSet = (text) => {
  orange('searchText', text)
  return (
    {
      type: searchTextSetKey,
      payload: { text },
    }
  )
}

export const searchTextUnsetKey = 'searchTextClearKey'
export const searchTextUnset = () => {
  return {
    type: searchTextUnsetKey,
  }
}

export const eventsSearchReadRequestKey = 'eventsSearchReadRequestKey'

export const eventsSearchReadRequest = createRequestThunk({
  request: api.events.search,
  key: eventsSearchReadRequestKey,
  success: [eventsRead],
  failure: [error => snackbarSet(`Search events failed: ${error}`, 'error')]
})

import {
  searchTextClearKey,
  searchTextSetKey,
  eventsSearchReadKey,
} from 'store/actions/search-actions'
// import { merge } from 'ramda'
// eslint-disable-next-line
import { blue } from 'logger'

export const searchText = (state = '', { type, payload }) => {
  switch (type) {
    case searchTextSetKey:
      return payload.text
    case searchTextClearKey:
      return ''
    default:
      return state
  }
}

export const search = (state = [], { type, payload }) => {
  switch (type) {
    case eventsSearchReadKey:
      return payload.events
    default:
      return state
  }
}


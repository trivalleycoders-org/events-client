import {
  searchTextUnsetKey,
  searchTextSetKey,
  eventsSearchReadRequestKey,
} from 'store/actions/search-actions'
// import { merge } from 'ramda'
// eslint-disable-next-line
import { blue } from 'logger'

export const searchText = (state = '', { type, payload }) => {
  switch (type) {
    case searchTextSetKey:
      return payload.text
    case searchTextUnsetKey:
      return ''
    default:
      return state
  }
}

export const search = (state = [], { type, payload }) => {
  switch (type) {
    case eventsSearchReadRequestKey:
      return payload.events
    default:
      return state
  }
}


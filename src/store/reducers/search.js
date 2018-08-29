import {
  keyClearSearchText,
  keySetSearchText,
  keyReadSearchEvents,
} from 'store/actions/search-actions'
// import { merge } from 'ramda'
// eslint-disable-next-line
import { blue } from 'logger'

export const searchText = (state = '', { type, payload }) => {
  switch (type) {
    case keySetSearchText:
      return payload.text
    case keyClearSearchText:
      return ''
    default:
      return state
  }
}

export const search = (state = [], { type, payload }) => {
  switch (type) {
    case keyReadSearchEvents:
      return payload.events
    default:
      return state
  }
}


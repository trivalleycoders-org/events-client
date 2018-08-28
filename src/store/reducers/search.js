import { keyClearSearchText, keySetSearchText } from 'store/actions/search-actions'
// import { merge } from 'ramda'
// eslint-disable-next-line
import { blue } from 'logger'

const searchText = (state = '', { type, payload }) => {
  switch (type) {
    case keySetSearchText:
      return payload.text
    case keyClearSearchText:
      return ''
    default:
      return state
  }
}

export default searchText
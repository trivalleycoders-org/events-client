import { pageMessageKey } from 'store/actions/page-message-actions'

// eslint-disable-next-line
import { blue } from 'logger'

const pageMessage = (state = '', { type, payload }) => {
  return state
  switch (type) {
    case pageMessageKey:
      return payload.message
    default:
      return state
  }
}

export default pageMessage
import { pageMessageKey } from 'store/actions/page-message-actions'

// eslint-disable-next-line
import { blue } from 'logger'

const pageMessage = (state = '', { type, payload }) => {
  switch (type) {
    case pageMessageKey:
      blue('pageMessage: message', payload)
      return payload.message
    default:
      return state
  }
}

export default pageMessage
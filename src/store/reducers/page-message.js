import { pageMessageKey } from 'store/actions/page-message-actions'

const pageMessage = (state = '', { type, payload }) => {
  switch (type) {
    case pageMessageKey:
      return payload.message
    default:
      return state
  }
}

export default pageMessage
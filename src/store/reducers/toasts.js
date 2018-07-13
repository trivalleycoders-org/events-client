import { keyClearToast, keySetToast } from '../actions/toast-actions'

export const toasts = (state = null, { type, payload }) => {
  switch (type) {
    case keySetToast:
      return payload
    case keyClearToast:
      return null
    default:
      return state
  }
}

export default toasts
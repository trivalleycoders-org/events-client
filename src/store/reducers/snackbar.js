import { keyClearSnackbar, keySetSnackbar } from '../actions/snackbar-actions'
import { merge } from 'ramda'
// eslint-disable-next-line
import { blue } from 'logger'

const snackbar = (state = {}, { type, payload }) => {
  switch (type) {
    case keySetSnackbar:
      return merge(payload, { open: true })
    case keyClearSnackbar:
      return {
        id: '',
        message: '',
        variant: '',
        open: false,

      }
    default:
      return state
  }
}

export default snackbar
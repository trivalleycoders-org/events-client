import { keyClearSnackbar, keySetSnackbar } from '../actions/snackbar-actions'
import { merge } from 'ramda'
// eslint-disable-next-line
import { blue } from 'logger'

const snackbar = (state = {}, { type, payload }) => {
  blue('reducer: snackbar: state', state)
  blue('reducer: snackbar: payload', payload)
  switch (type) {
    case keySetSnackbar:
      const o = merge(payload, { open: true })
      blue('set o', o)
      return o
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
import { snackbarUnsetKey, snackbarSetKey } from '../actions/snackbar-actions'
import { merge } from 'ramda'
// eslint-disable-next-line
import { blue } from 'logger'

const snackbar = (state = {}, { type, payload }) => {
  switch (type) {
    case snackbarSetKey:
      return merge(payload, { open: true })
    case snackbarUnsetKey:
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
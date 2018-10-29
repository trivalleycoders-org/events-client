import shortid from 'shortid'

/* Dev */
// eslint-disable-next-line
import { orange } from 'logger'

/* Snackbar variants
    - success
    - warning
    - error
    - info
*/
export const snackbarSetKey = 'actionSetSnackbar'
export const snackbarSet = (message, variant = 'info', id = shortid.generate()) => {
  return (
    {
      type: snackbarSetKey,
      payload: {
        id,
        message,
        variant,
      },
    }
  )
}

export const snackbarUnsetKey = 'actionKeyClearSnackbar'
export const snackbarUnset = () => {
  return {
    type: snackbarUnsetKey,
  }
}

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
export const keySetSnackbar = 'actionSetSnackbar'
export const setSnackbar = (message, variant = 'info', id = shortid.generate()) => {
  return (
    {
      type: keySetSnackbar,
      payload: {
        id,
        message,
        variant,
      },
    }
  )
}

export const keyClearSnackbar = 'actionKeyClearSnackbar'
export const clearSnackbar = () => {
  return {
    type: keyClearSnackbar,
  }
}

import shortid from 'shortid'
import { orange } from 'logger'


/* Snackbar variants
    - success
    - warning
    - error
    - info
*/
export const keySetSnackbar = 'actionSetSnackbar'
export const setSnackbar = (message, variant = 'info', id=shortid.generate() ) => {
  orange('action setSnackbar: message', message)
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
export const clearSnackbar = () => ({
  type: keyClearSnackbar,
})
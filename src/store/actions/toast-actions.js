import shortid from 'shortid'

export const keySetToast = 'actionKeyCreateEvent'
export const setToast = (message, level = 'info', id=shortid.generate() ) => ({
  type: keySetToast,
  payload: {
    id,
    message,
    level,
  },
})

export const keyClearToast = 'actionKeyClearToast'
export const clearToast = () => ({
  type: keyClearToast,
})
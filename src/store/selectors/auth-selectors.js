import { hasProp } from 'lib/hasProp'

/* Dev */
// eslint-disable-next-line
import { yellow } from 'logger'
export const getUserId = (state) => {
  if (hasProp('userId', state.auth)) {
    return state.auth.currentUser.id
  } else {
    return undefined
  }
}

export const getLoggedIn = (state) => {
  if (hasProp('loggedIn', state.auth)) {
    return state.auth.loggedIn
  } else {
    return false
  }
}
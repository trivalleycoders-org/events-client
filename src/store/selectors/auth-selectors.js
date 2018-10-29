import { hasProp } from 'lib/hasProp'

/* Dev */
// eslint-disable-next-line
import { yellow, red } from 'logger'

export const getUserId = (state) => {
  if (hasProp('currentUser.id', state.auth)) {
    return state.auth.currentUser.id
  } else {
    return undefined
  }
}

export const getLoggedIn = (state) => {
  // yellow('hasProp: loggedIn', hasProp('loggedIn', state.auth))
  // yellow('selector.loggedIn:', state.auth.loggedIn)

  if (hasProp('loggedIn', state.auth)) {
    return state.auth.loggedIn
  } else {
    return false
  }
}

export const getEmailName = (state) => {
  if (hasProp('currentUser.email', state.auth)) {
    return state.auth.currentUser.email
  } else {
    return undefined
  }
}
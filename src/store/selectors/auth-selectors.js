/* Dev */
// eslint-disable-next-line
import { yellow } from 'logger'
export const getUserId = (state) => {

  // const a = state.auth.currentUser ? state.auth.currentUser.id : ''
  let userId = ''
  if (state.auth.currentUser) {
    userId = state.auth.currentUser.id
  }
  return userId

}

export const getLoggedIn = (state) => state.auth.loggedIn
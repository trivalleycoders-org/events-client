import { yellow } from 'logger'
export const getUserId = (state) => {

  // const a = state.auth.currentUser ? state.auth.currentUser.id : ''
  let userId = ''
  if (state.auth.currentUser) {
    // yellow('getUserId', 'user id found')
    userId = state.auth.currentUser.id
  } else {
    // yellow('getUserId', 'user id NOT found')
  }
  yellow('auth-selectors: getUserId', userId)
  return userId

}
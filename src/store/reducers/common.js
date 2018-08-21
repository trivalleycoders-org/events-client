import { keyRegisterUser, keyLoginUser, keyLogoutUser } from '../actions/auth-actions'

const defaultState = {
  token: null
}

export default (state = defaultState, { type, payload, error }) => {
  console.log('type in common: ', type)
  console.log('payload in common: ', payload)
  console.log('error in common: ', error)

  switch (type) {
    case keyLoginUser:
    case keyRegisterUser:
      return {
        ...state,
        redirectTo: error ? null : '/',
        token: error ? null : payload.user.token,
        currentUser: error ? null : payload.user
      }
    case keyLogoutUser:
      return {
        ...state,
        redirectTo: '/',
        token: null,
        currentUser: null
      }
    default:
      return state
  }
}
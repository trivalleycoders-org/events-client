import { keyRegisterUser, keyLoginUser, keyLogoutUser, keyLoginFailed, keyUpdatePassword } from '../actions/auth-actions'

export default (state = {}, { type, payload, error, subtype }) => {
  switch (type) {
    case keyLoginUser:
    case keyRegisterUser:
      return {
        ...state,
        errors: error ? payload.error : null,
        redirectTo: error ? null : '/',
        token: error ? null : payload.user.token,
        currentUser: error ? null : payload.user
      }
    case keyUpdatePassword:
      return {
        ...state,
        password: payload
      }
    case keyLoginFailed:
      return {
        ...state,
        error: payload.error ? payload.error : null
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

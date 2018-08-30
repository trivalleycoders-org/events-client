import { userRegisterKey, userLoginKey, userLogoutKey, loginFailedKey, passwordUpdateKey } from '../actions/auth-actions'

export default (state = {}, { type, payload, error, subtype }) => {
  switch (type) {
    case userLoginKey:
    case userRegisterKey:
      return {
        ...state,
        errors: error ? payload.error : null,
        redirectTo: error ? null : '/',
        token: error ? null : payload.user.token,
        currentUser: error ? null : payload.user
      }
    case passwordUpdateKey:
      return {
        ...state,
        password: payload
      }
    case loginFailedKey:
      return {
        ...state,
        redirectTo: '/login',
        error: payload.error ? payload.error : null
      }
    case userLogoutKey:
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

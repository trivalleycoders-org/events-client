import {
  userRegisterKey,
  userLoginKey,
  userLogoutKey,
  loginFailedKey,
  userPasswordUpdateKey
} from 'store/actions/auth-actions'


export default (state = {}, { type, payload }) => {
  switch (type) {
    case userLoginKey:
      return {
        ...state,
        loggedIn: true,
        // errors: error ? payload.error : null,
        // redirectTo: error ? null : '/events',
        currentUser: payload.user
      }

    case userRegisterKey:
      return {
        ...state,
        loggedIn: false,
        // errors: error ? payload.error : null,
        // redirectTo: error ? null : '/',
        currentUser: payload.user
      }
    case userPasswordUpdateKey:
      return {
        ...state,
        // redirectTo: '/login',
        currentUser: null
      }
    case loginFailedKey:
      return {
        ...state,
        loggedIn: false,
        // redirectTo: '/login',
        // errors: payload.error ? payload.error : null
      }
    case userLogoutKey:
      return {
        ...state,
        loggedIn: false,
        // redirectTo: '/',
        currentUser: null
      }
    default:
      return {
        ...state,
        // redirectTo: null,
      }
  }
}

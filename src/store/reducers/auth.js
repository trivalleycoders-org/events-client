import {
  userRegisterKey,
  userLoginKey,
  userLogoutKey,
  loginFailedKey,
  userPasswordUpdateKey,
  userValidateKey
} from 'store/actions/auth-actions'


export default (state = { }, { type, payload }) => {
  switch (type) {
    case userValidateKey:
    case userLoginKey:
      return {
        ...state,
        loggedIn: true,
        currentUser: payload.user
      }
    case userRegisterKey:
      return {
        ...state,
        loggedIn: false,
        currentUser: payload.user
      }
    case userPasswordUpdateKey:
      return {
        ...state,
        loggedIn: false,
        currentUser: null
      }
    case loginFailedKey:
      return {
        ...state,
        loggedIn: false,
      }
    case userLogoutKey:
      return {
        ...state,
        loggedIn: false,
        currentUser: null
      }
    default:
      return {
        ...state,
      }
  }
}

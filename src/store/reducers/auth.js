import {
  userRegisterKey,
  userLoginKey,
  userLogoutKey,
  loginFailedKey,
  userPasswordUpdateKey,
  userSetLoggedInKey,
  userValidateKey
} from 'store/actions/auth-actions'
import { merge } from 'ramda'
import { blue } from 'logger'


export default (state = { loggedIn: false }, { type, payload }) => {
  switch (type) {
    case userSetLoggedInKey:
    case userValidateKey:
    case userLoginKey:
      // blue('reducer: userLogIn: state', state)
      const r = merge(state, { loggedIn: true, currentUser: payload.user })
      // blue('reducer: userLogIn: r', r)
      return r
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

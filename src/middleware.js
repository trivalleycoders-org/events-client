import setToken from './api/api-helpers'
import { keyRegisterUser, keyLoginUser, keyLogoutUser } from './store/actions/auth-actions'

const localStorageMiddleware = store => next => action => {
  console.log('next: ', next)
  console.log('action in middleware: ', action)
  if (action.type === keyRegisterUser || action.type === keyLoginUser) {
    console.log('action.type in middleware: ', action.type)
    if (!action.error) {
      console.log('action.error in middleware: ', action.error)
      window.localStorage.setItem('jwt', action.payload.user.token)
      console.log('action.payload.user.token: ', action.payload.user.token)
      // setToken(action.payload.user.token)
    }
  } else if (action.type === keyLogoutUser) {
    console.log('Inside middleware.js LOGOUT')
    window.localStorage.setItem('jwt', '')
  }
  console.log('action in middleware after storing: ', action)
  next(action)
}

export { localStorageMiddleware }

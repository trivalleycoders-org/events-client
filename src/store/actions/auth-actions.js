import { createRequestThunk } from './action-helpers'
import api from 'api'
import { setSnackbar } from './snackbar-actions'

export const keyRegisterUser = 'actionKeyRegisterUser'
export const requestKeyRegisterUser = 'requestKeyRegisterUser'

const registerUser = (user) => {
  return ({
    type: keyRegisterUser,
    payload: user
  })
}

export const requestRegisterUser = createRequestThunk({
  request: api.users.register,
  key: requestKeyRegisterUser,
  success: [registerUser],
  failure: [(error) => setSnackbar(error)]
})

export const keyLoginUser = 'actionKeyLoginUser'
export const keyLoginFailed = 'actionKeyLoginFailed'
export const requestKeyLoginUser = 'requestKeyLoginUser'

const loginUser = (user) => {
  return ({
    type: keyLoginUser,
    payload: user
  })
}

const loginFailed = (error) => {
  return ({
    type: keyLoginFailed,
    payload: error
  })
}

export const requestLoginUser = createRequestThunk({
  request: api.users.login,
  key: requestKeyLoginUser,
  success: [loginUser],
  failure: [loginFailed, (error) => setSnackbar(error.error, 'error')]
})


export const logoutUser = (user) => {
  document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 GMT'
  return ({
    type: keyLogoutUser
  })
}

export const keyLogoutUser = 'actionKeyLogoutUser'
export const requestKeyLogoutUser = 'requestKeyLogoutUser'

export const requestLogoutUser = createRequestThunk({
  request: api.users.logout,
  key: requestKeyLogoutUser,
  success: [logoutUser],
  failure: [(error) => setSnackbar(error.error, 'error')]
})

export const keyUpdatePassword = 'actionKeyUpdatePassword'
export const requestKeyUpdatePassword = 'requestKeyUpdatePassword'

const updatePassword = (password) => {
  return ({
    type: keyUpdatePassword,
    payload: password
  })
}

export const requestUpdatePassword = createRequestThunk({
  request: api.users.update,
  key: requestKeyUpdatePassword,
  success: [updatePassword],
  failure: [(error) => setSnackbar(error)]
})

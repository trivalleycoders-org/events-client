import { createRequestThunk, logError } from './action-helpers'
import api from 'api'

export const keyRegisterUser = 'actionKeyRegisterUser'
export const requestKeyRegisterUser = 'requestKeyRegisterUser'
export const keyLogoutUser = 'actionKeyLogoutUser'

export const logoutUser = (user) => {
  console.log('in logout User: ')
  return ({
    type: keyLogoutUser
  })
}

const registerUser = (user) => {
  console.log('in registerUser: ')
  return ({
    type: keyRegisterUser,
    payload: user
  })
}

export const requestRegisterUser = createRequestThunk({
  request: api.users.register,
  key: requestKeyRegisterUser,
  success: [registerUser],
  failure: [error => logError(error, requestKeyRegisterUser)]
})

export const keyLoginUser = 'actionKeyLoginUser'
export const requestKeyLoginUser = 'requestKeyLoginUser'

const loginUser = (user) => {
  console.log('in login User: ')
  return ({
    type: keyLoginUser,
    payload: user
  })
}

export const requestLoginUser = createRequestThunk({
  request: api.users.login,
  key: requestKeyLoginUser,
  success: [loginUser],
  failure: [error => logError(error, requestKeyLoginUser)]
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
  failure: [error => logError(error, requestKeyUpdatePassword)]
})

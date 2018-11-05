import { createRequestThunk } from './action-helpers'
import api from 'api'
import { pageMessage } from './page-message-actions'

// eslint-disable-next-line
import { orange } from 'logger'

export const userSetLoggedInKey = 'userSetLoggedInKey'
export const userSetLoggedIn = (user) => {
  return ({
    type: userSetLoggedInKey,
    payload: { user }
  })
}

// export const userSetLoggedOutKey = 'userSetLoggedOutKey'
// export const userSetLoggedOut = (user) => {
//   return ({
//     type: userSetLoggedOutKey,
//   })
// }

// logout
export const userLogoutKey = 'userLogoutKey'
export const userLogout = (user) => {
  document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 GMT'
  return ({
    type: userLogoutKey
  })
}

// export const userLogoutRequestKey = 'userLogoutRequestKey'
// export const userLogoutRequest = createRequestThunk({
//   request: api.users.logout,
//   key: userLogoutRequestKey,
//   success: [userLogout],
//   failure: [(error) => pageMessage(error.error)]
// })

export const userValidateKey = 'userValidateKey'
export const userValidate = (user) => {
  // orange('authActions.userValidate: user', user)
  return ({
    type: userValidateKey,
    payload: { user }
  })
}

export const userValidateRequestKey = 'userValidateRequestKey'
export const userValidateRequest = createRequestThunk({
  request: api.users.validate,
  key: userValidateRequestKey,
  success: [userValidate],
  failure: [(error) => pageMessage(error.error)]
})

// login
export const userLoginKey = 'userLoginKey'
const userLogin = (user) => {
  return ({
    type: userLoginKey,
    payload: user
  })
}

export const loginFailedKey = 'loginFailedKey'
const loginFailed = (error) => {
  return ({
    type: loginFailedKey,
    payload: error
  })
}

export const userLoginRequestKey = 'userLoginRequestKey'
export const userLoginRequest = createRequestThunk({
  request: api.users.login,
  key: userLoginRequestKey,
  success: [userLogin /*, userLoginCache*/],
  failure: [loginFailed, (error) => pageMessage(error.error)]
})

// register
export const userRegisterKey = 'userRegisterKey'
const userRegister = (user) => {
  return ({
    type: userRegisterKey,
    payload: user
  })
}

export const userRegisterRequestKey = 'userRegisterRequestKey'
export const userRegisterRequest = createRequestThunk({
  request: api.users.register,
  key: userRegisterRequestKey,
  success: [
    userRegister,
  ],
  failure: [
    (error) => pageMessage(error.error)
  ]
})

// update password
export const userPasswordUpdateKey = 'userUpdatePasswordKey'
const passwordUpdate = (password) => {
  return ({
    type: userPasswordUpdateKey,
    payload: password
  })
}

export const userPasswordUpdateRequestKey = 'userPasswordUpdateRequestKey'
export const passwordUpdateRequest = createRequestThunk({
  request: api.users.update,
  key: userPasswordUpdateRequestKey,
  success: [passwordUpdate],
  failure: [(error) => pageMessage(error.error)]
})

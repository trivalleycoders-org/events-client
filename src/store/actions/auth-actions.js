import { createRequestThunk } from './action-helpers'
import api from 'api'
import { snackbarSet } from './snackbar-actions'
import { orange } from 'logger'
import { pageMessage } from './page-message-actions'

// logout

export const userLogoutKey = 'userLogoutKey'

export const userLogout = (user) => {
  return ({
    type: userLogoutKey
  })
}

export const userLogoutRequestKey = 'userLogoutRequestKey'

export const userLogoutRequest = createRequestThunk({
  request: api.users.logout,
  key: userLogoutRequestKey,
  success: [userLogout],
  failure: [(error) => snackbarSet(error.error, 'error')]
})

// login

export const userLoginKey = 'userLoginKey'

const userLogin = (user) => {
  orange('userLogin: user', user)
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
  failure: [loginFailed, (error) => snackbarSet(error.error, 'error')]
})

// register

export const userRegisterKey = 'userRegisterKey'

const userRegister = (user) => {
  return ({
    type: userRegisterKey,
    payload: user
  })
}

// const registerFailed = (error) => {
//   return ({
//     type: 'none',
//   })

// }

export const userRegisterRequestKey = 'userRegisterRequestKey'
export const userRegisterRequest = createRequestThunk({
  request: api.users.register,
  key: userRegisterRequestKey,
  success: [
    userRegister,
    () => pageMessage('')
  ],
  failure: [
    // (error) => registerFailed(error),
    () => pageMessage('that email is already taken')
  ]
})

// update password

export const userPasswordUpdateKey = 'userUpdatePasswordKey'

const passwordUpdate = (password) => {
  console.log('before deleting cookie')
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
  failure: [(error) => snackbarSet(error)]
})

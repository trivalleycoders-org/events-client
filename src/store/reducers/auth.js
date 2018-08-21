import { keyRegisterUser, keyUpdatePassword } from '../actions/auth-actions'
import { blue } from 'logger'

export default (state = {}, { type, payload, error }) => {
  console.log('auth reducer.type', type)
  console.log('auth reducer.payload', payload)
  switch (type) {
    case keyRegisterUser:
      return {
        ...state,
        inProgress: false,
        errors: error ? payload.errors : null
      }
    case keyUpdatePassword:
      return {
        ...state,
        password: payload
      }
    default:
      return state
  }
}

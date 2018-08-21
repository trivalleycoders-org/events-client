import * as types from './model-types'

export const User = {
  email: {
    type: types.string,
    always: true,
  },
  password: {
    type: types.string,
    always: true,
  }
}
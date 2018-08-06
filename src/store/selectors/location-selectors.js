// eslint-disable-next-line
import { yellow } from 'logger'

export const getCities = (state) => {
  const r = state.cities || []
  return r
}

export const getPostalCodes = (state) => {
  const r = state.postalCodes || []
  return r
}

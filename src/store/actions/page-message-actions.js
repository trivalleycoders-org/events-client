/* Dev */
// eslint-disable-next-line
import { orange } from 'logger'

export const pageMessageKey = 'pageMessageKey'

export const pageMessage = (message) => {
  orange('pageMessage: message', message)
  return ({
    type: pageMessageKey,
    payload: { message }
  })
}
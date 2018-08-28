/* Dev */
// eslint-disable-next-line
import { orange } from 'logger'

export const keySetSearchText = 'actionSetSearchText'
export const setSearchText = (text) => {
  return (
    {
      type: keySetSearchText,
      payload: { text },
    }
  )
}

export const keyClearSearchText = 'actionKeyClearSearchText'
export const clearSearchText = () => {
  return {
    type: keyClearSearchText,
  }
}

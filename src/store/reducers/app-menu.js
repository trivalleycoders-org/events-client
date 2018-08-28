import { keyOpenAppMenu, keyCloseAppMenu, keyToggleAppMenu } from 'store/actions/app-menu-actions'
import { merge, isEmpty } from 'ramda'
// eslint-disable-next-line
import { blue } from 'logger'

const appMenu = (state = {}, { type, payload }) => {
  switch (type) {
    case keyOpenAppMenu:
      return merge(payload, { open: true })
    case keyCloseAppMenu:
      return { open: false }
    case keyToggleAppMenu:
      // blue('toggle: state', state)
      if (isEmpty(state) || !state.open) {
        return { open: true }
      } else {
        return { open: false }
      }
    default:
      return state
  }
}

export default appMenu
import { keyOpenAppMenu, keyCloseAppMenu, appMenuToggleKey } from 'store/actions/app-menu-actions'
import { merge, isEmpty } from 'ramda'
// eslint-disable-next-line
import { blue } from 'logger'

const appMenu = (state = {}, { type, payload }) => {
  switch (type) {
    case appMenuToggleKey:
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
import { appMenuToggleKey } from 'store/actions/app-menu-actions'
import { isEmpty } from 'ramda'
// eslint-disable-next-line
import { blue } from 'logger'

const appMenu = (state = {}, { type, payload }) => {
  switch (type) {
    case appMenuToggleKey:
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
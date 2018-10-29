/* Dev */
// eslint-disable-next-line
import { orange } from 'logger'

export const appMenuToggleKey = 'actionToggleAppMenu'
export const appMenuToggle = () => {
  return (
    {
      type: appMenuToggleKey,
    }
  )
}
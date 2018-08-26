/* Dev */
// eslint-disable-next-line
import { orange } from 'logger'

export const keyToggleAppMenu = 'actionToggleAppMenu'
export const toggleAppMenu = () => {
  return (
    {
      type: keyToggleAppMenu,
    }
  )
}

export const keyOpenAppMenu = 'actionOpenAppMenu'
export const openAppMenu = (side) => {
  return (
    {
      type: keyOpenAppMenu,
      payload: { side },
    }
  )
}

export const keyCloseAppMenu = 'actionKeyCloseAppMenu'
export const closeAppMenu = () => {
  return {
    type: keyCloseAppMenu,
  }
}

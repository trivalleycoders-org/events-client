import React from 'react'
import ButtonNavLink from 'ui/elements/ButtonNavLink'
// Dev
import { purple } from 'logger'
import { logRender } from 'logging'

const LoggedOut = () => {
  logRender && purple('LogedOut - render')
  return (
    <React.Fragment>
      <ButtonNavLink to='/'>
        Home
      </ButtonNavLink>
      <ButtonNavLink to='/login'>
        Login
      </ButtonNavLink>
      <ButtonNavLink
        to='/register'
        variant='outlined'
        // variant='flat'
        // variant='contained'
        // variant=''
        // color='secondary'
        color='secondary'
      >
        Register
      </ButtonNavLink>
    </React.Fragment>
  )
}

export default LoggedOut
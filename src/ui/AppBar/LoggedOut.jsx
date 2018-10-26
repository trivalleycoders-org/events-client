import React from 'react'
import ButtonNavLink from 'ui/ui-elements/ButtonNavLink'
import { purple } from 'logger'

const LoggedOut = () => {
  purple('LogedOut - render')
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
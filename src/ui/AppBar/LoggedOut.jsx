import React from 'react'
import ButtonNavLink from 'ui/ui-elements/ButtonNavLink'

const LoggedOut = () => {
  return (
    <React.Fragment>
      <ButtonNavLink to='/Events'>
        Home
      </ButtonNavLink>
      <ButtonNavLink to='/login'>
        Login
      </ButtonNavLink>
      <ButtonNavLink to='/register' variant='contained' color='secondary'>
        Register
      </ButtonNavLink>
    </React.Fragment>
  )
}

export default LoggedOut
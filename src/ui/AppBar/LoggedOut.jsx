import React from 'react'
import ButtonNavLink from 'ui/ui-elements/ButtonNavLink'

const LoggedOut = () => {
  return (
    <React.Fragment>
      <ButtonNavLink to='/login'>
        Login
      </ButtonNavLink>
      <ButtonNavLink to='/register'>
        Register
      </ButtonNavLink>
    </React.Fragment>
  )
}

export default LoggedOut
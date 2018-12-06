import React from 'react'
import PropTypes from 'prop-types'
import ButtonNavLink from 'ui/elements/ButtonNavLink'
import AccountMenu from './AccountMenu'

const  LoggedIn = ({ emailName, handleMenuClick, logout }) => {

  return (
    <React.Fragment>
      <ButtonNavLink to='/'>
          Home
      </ButtonNavLink>
      <ButtonNavLink to='/create-event'>
        Create Event
      </ButtonNavLink>
      <ButtonNavLink to='/my-events'>
        My Events
      </ButtonNavLink>
      <AccountMenu
        emailName={emailName}
        handleMenuClick={handleMenuClick}
        logout={logout}
      />
    </React.Fragment>
  )
}

export default LoggedIn

AccountMenu.propTypes = {
  emailName: PropTypes.string.isRequired,
  handleMenuClick: PropTypes.func.isRequired,
}
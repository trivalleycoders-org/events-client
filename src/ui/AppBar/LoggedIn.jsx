import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import ButtonNavLink from 'ui/ui-elements/ButtonNavLink'
import AccountMenu from './AccountMenu'

/* Dev */
// eslint-disable-next-line
import { green } from 'logger'

const  LoggedIn = () => {

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
      <AccountMenu />
    </React.Fragment>
  )
}

const styles = {}

export default withStyles(styles)(LoggedIn)
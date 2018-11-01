import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import ButtonNavLink from 'ui/elements/ButtonNavLink'
import AccountMenu from './AccountMenu'

/* Dev */
// eslint-disable-next-line
import { green, purple } from 'logger'
import { logRender } from 'logging'

const  LoggedIn = () => {
  logRender && purple('LoggedIn - render')
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
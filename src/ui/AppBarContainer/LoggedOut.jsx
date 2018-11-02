import React from 'react'
import { compose } from 'recompose'
import { withStyles } from '@material-ui/core/styles'

import ButtonNavLink from 'ui/elements/ButtonNavLink'
// Dev
import { purple } from 'logger'
import { logRender } from 'logging'

const LoggedOut = (props) => {
  const { classes } = props
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
        color='secondary'
        className={classes.regButton}
      >
        Register
      </ButtonNavLink>
    </React.Fragment>
  )
}

const styles = theme => ({
  regButton: {
    border: '1px solid #fff',
    '&:hover': {
      border: '1px solid #fff',
    }
  },
})

export default compose(
  withStyles(styles),
)(LoggedOut)

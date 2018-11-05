import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import ButtonNavLink from 'ui/elements/ButtonNavLink'
// Dev
import { purple } from 'logger'
import { logRender } from 'logging'

const LoggedOut = (props) => {
  logRender && purple('LogedOut - render')
  const { classes } = props
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

export default withStyles(styles)(LoggedOut)

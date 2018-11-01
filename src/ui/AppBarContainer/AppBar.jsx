import React from 'react'
import { compose } from 'recompose'
import { withStyles } from '@material-ui/core/styles'
import {
  AppBar as MuiAppBar,
  Toolbar,
  Typography,
  IconButton,
  withWidth,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import LoggedIn from './LoggedIn'
import LoggedOut from './LoggedOut'

/* Dev */
// eslint-disable-next-line
import { green, purple } from 'logger'
import { logRender } from 'logging'

class AppBar extends React.Component {

  toggleDrawer = () => {
    this.props.appMenuToggle()
  }

  render() {
    logRender && purple('AppBar - render')
    const { classes, emailName, isLoggedIn, width } = this.props
    return (
      <MuiAppBar id='AppBar' position='fixed' className={classes.appBar}>
        <Toolbar>
        <IconButton
            className={classes.menuButton}
            color='inherit'
            aria-label='Menu'
            onClick={this.toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h5' color='inherit' className={classes.flex}>
            Drone Madness
          </Typography>
          {width !== 'xs'
            ? isLoggedIn ? <LoggedIn emailName={emailName} /> : <LoggedOut />
            : null
          }
        </Toolbar>
      </MuiAppBar>
    )
  }
}

const styles = theme => ({
  drone: {
    fontWeight: 600,
  },
  appBar: {
    display: 'flex',
    justifyContent: 'center',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
})

export default compose(
  withWidth(),
  withStyles(styles),
)(AppBar)

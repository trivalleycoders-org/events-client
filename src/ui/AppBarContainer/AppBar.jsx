import React from 'react'
import PropTypes from 'prop-types'
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
  componentWillUnmount() {
    purple('appbar unmount')
  }
  toggleDrawer = () => {
    this.props.appMenuToggle()
  }

  whichMenu = () => {

    const { emailName, handleMenuClick, isLoggedIn, width } = this.props
    green('width', width)
    if (width === 'xs') {
      green('whichMenu- width === xs')
      return null
    }
    if (isLoggedIn) {
      green('whichMenu - is logged in')
      return  <LoggedIn
                emailName={emailName}
                logout={this.logout}
                handleMenuClick={handleMenuClick}
              />
    } else {
      green('whichMenu - not logged in')
      return <LoggedOut />
    }
  }

  render() {
    logRender && purple('AppBar - render')
    const { classes } = this.props
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
          {this.whichMenu()}
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


AppBar.propTypes = {
  emailName: PropTypes.string.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  appMenuToggle: PropTypes.func.isRequired,
  handleMenuClick: PropTypes.func.isRequired
}
import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { compose } from 'recompose'
import { Route } from 'react-router-dom'
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

class AppBar extends React.Component {
  toggleDrawer = () => {
    this.props.appMenuToggle()
  }

  whichMenu = () => {
    const { emailName, handleMenuClick, isLoggedIn, width } = this.props
    if (width === 'xs') {
      return null
    }
    if (isLoggedIn) {
      return  <LoggedIn
                emailName={emailName}
                logout={this.logout}
                handleMenuClick={handleMenuClick}
              />
    } else {
      return <LoggedOut />
    }
  }

  render() {
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
          <Link to='/' className={classes.link}>
            <Typography variant='h5' color='inherit'>
              Drone Madness
            </Typography>
          </Link>
          <Route render={() => (
            this.whichMenu()

          )}/>
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
  link: {
    color: '#fff',
    flex: 1,
    textDecoration: 'none',
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

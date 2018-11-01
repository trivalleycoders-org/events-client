import React from 'react'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import {
  AppBar as MuiAppBar,
  Toolbar,
  Typography,
  IconButton,
  withWidth,
} from '@material-ui/core'
import { getLoggedIn } from 'store/selectors/auth-selectors'
import { appMenuToggle } from 'store/actions/app-menu-actions'
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
    const { classes, isLoggedIn, width } = this.props
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
            ? isLoggedIn ? <LoggedIn /> : <LoggedOut />
            : null
            // true ? <LoggedIn /> : <LoggedOut />
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
    // Tmp
    // backgroundColor: 'transparent',
    // Tmp
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
})

const actions = { appMenuToggle }

const mapStateToProps = (state) => ({
  isLoggedIn: getLoggedIn(state)
})

export default compose(
  withWidth(),
  withStyles(styles),
  connect(mapStateToProps, actions),
)(AppBar)

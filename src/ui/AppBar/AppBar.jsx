import React from 'react'
import PropTypes from 'prop-types'
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
import MenuIcon from '@material-ui/icons/Menu'
import * as authSelectors from 'store/selectors/auth-selectors'
import * as appMenuActions from 'store/actions/app-menu-actions'
import LoggedIn from './LoggedIn'
import LoggedOut from './LoggedOut'

/* Dev */
// eslint-disable-next-line
import { green } from 'logger'

class AppBar extends React.Component {

  toggleDraw = () => {
    this.props.appMenuToggle()
  }

  render() {

    const { classes, isLoggedIn, width } = this.props

    return (
      <MuiAppBar id='AppBar' position='fixed' className={classes.appBar}>
        <Toolbar>
        <IconButton
            className={classes.menuButton}
            color='inherit'
            aria-label='Menu'
            onClick={this.toggleDraw}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='title' color='inherit' className={classes.flex}>
            <span className={classes.drone}>Drone</span> <span className={classes.madness}>Madness</span>
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

/*






*/

const styles = theme => ({
  drone: {
    fontWeight: 600,
  },
  appBar: {
    display: 'flex',
    justifyContent: 'center',
    // backgroundColor: theme.palette.background.default,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
})

const mapStateToProps = (state) => ({
  isLoggedIn: authSelectors.getLoggedIn(state)
})

export default compose(
  withWidth(),
  withStyles(styles),
  connect(mapStateToProps, appMenuActions),
)(AppBar)
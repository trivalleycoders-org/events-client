import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import {
  AppBar,
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

class MainAppBar extends React.Component {

  toggleDraw = () => {
    this.props.appMenuToggle()
  }

  render() {

    const { classes, isLoggedIn, width } = this.props

    return (
      <div className={classes.wrapper}>
        <AppBar position='fixed' className={classes.appBar}>
          <Toolbar>
            <IconButton className={classes.menuButton} color='inherit' aria-label='Menu' onClick={this.toggleDraw}>
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
        </AppBar>
      </div>
    )
  }
}

MainAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
}

const styles = theme => ({
  drone: {
    fontWeight: 600,
  },
  madness: {
    // color: theme.palette.secondary.main,
    // fontWeight: 400,

  },
  appBar: {
    height: 100,
    display: 'flex',
    justifyContent: 'center',
    // backgroundColor: theme.palette.background.default,
  },
  wrapper: {
    // display: 'flex',
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
)(MainAppBar)
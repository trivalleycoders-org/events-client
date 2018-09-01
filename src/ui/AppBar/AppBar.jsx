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
    const { classes, isLoggedIn } = this.props
    return (
      <div className={classes.root}>
        <AppBar position='fixed'>
          <Toolbar>
            <IconButton className={classes.menuButton} color='inherit' aria-label='Menu' onClick={this.toggleDraw}>
              <MenuIcon />
            </IconButton>
            <Typography variant='title' color='inherit' className={classes.flex}>
              Drone Events
            </Typography>
            {
              isLoggedIn ? <LoggedIn /> : <LoggedOut />
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
  root: {
    display: 'flex',
    // flexGrow: 1,
  },
  paper: {
    marginRight: theme.spacing.unit * 2
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
  withStyles(styles),
  connect(mapStateToProps, appMenuActions),
)(MainAppBar)
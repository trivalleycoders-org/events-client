import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import {
  AppBar,
  ClickAwayListener,
  Grow,
  Paper,
  Popper,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  MenuList,
} from '@material-ui/core'
import ButtonNavLink from 'ui/ui-elements/ButtonNavLink'
import MenuIcon from '@material-ui/icons/Menu'
import * as appMenuActions from 'store/actions/app-menu-actions'
import * as authSelectors from 'store/selectors/auth-selectors'
import * as requestSelectors from 'store/selectors/request-selectors'
import AccountCircle from '@material-ui/icons/AccountCircle'
/* Dev */
// eslint-disable-next-line
import { green } from 'logger'

class  LoggedIn extends React.Component {
  state = {
    open: false,
  }
  handleToggle = () => {
    this.setState(state => ({ open: !state.open }))
  }

  handleClose = event => {
    if (this.anchorEl.contains(event.target)) {
      return
    }

    this.setState({ open: false });
  }
  render() {
    const { open } = this.state
    return (
      <React.Fragment>
        <ButtonNavLink to='/events'>
          Home
        </ButtonNavLink>
        <ButtonNavLink to='/new-event'>
          Create Event
        </ButtonNavLink>
        <ButtonNavLink to='/my-events'>
          My Events
        </ButtonNavLink>
        <IconButton
          buttonRef={node => {
            this.anchorEl = node
          }}
          aria-owns={open ? 'menu-list-grow' : null}
          aria-haspopup="true"
          onClick={this.handleToggle}
        >
          <AccountCircle />
        </IconButton>
        <Popper open={open} anchorEl={this.anchorEl} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              id="menu-list-grow"
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={this.handleClose}>
                  <MenuList>
                    <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                    <MenuItem onClick={this.handleClose}>Settings</MenuItem>
                    <MenuItem onClick={this.handleClose}>Logout</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </React.Fragment>
    )
  }

}

const LoggedOut = () => {
  return (
    <React.Fragment>
    <ButtonNavLink to='/login'>
        Login
      </ButtonNavLink>
      <ButtonNavLink to='/register'>
        Register
      </ButtonNavLink>
    </React.Fragment>
  )

}

class MainAppBar extends React.Component {

  toggleDraw = () => {
    this.props.appMenuToggle()
  }

  render() {
    const { classes, isLoggedIn } = this.props
    green('isLoggedIn', isLoggedIn)
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
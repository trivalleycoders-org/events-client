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
  Menu,
  MenuItem,
  MenuList,
} from '@material-ui/core'
import ButtonNavLink from 'ui/ui-elements/ButtonNavLink'
import MenuIcon from '@material-ui/icons/Menu'
import * as appMenuActions from 'store/actions/app-menu-actions'
import AccountCircle from '@material-ui/icons/AccountCircle'
/* Dev */
// eslint-disable-next-line
import { green } from 'logger'
import { render } from 'react-dom';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
}

class MainAppBar extends React.Component {

  state = {
    anchorEl: null,
  }

  toggleDraw = () => {
    this.props.appMenuToggle()
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  }

  handleClose = () => {
    this.setState({ anchorEl: null });
  }

  render() {
    const { classes } = this.props
    const { anchorEl } = this.state
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
            <ButtonNavLink to='/events'>
              Home
            </ButtonNavLink>
            <ButtonNavLink to='/new-event'>
              Create Events
            </ButtonNavLink>
            <ButtonNavLink to='/my-events'>
              My Events
            </ButtonNavLink>
            <ButtonNavLink to='/register'>
              Register
            </ButtonNavLink>
            <ButtonNavLink to='/login'>
              Login
            </ButtonNavLink>
            <ButtonNavLink to='/settings'>
              Settings
            </ButtonNavLink>
            <IconButton
              aria-owns={anchorEl ? 'simple-menu' : null}
              aria-haspopup="true"
              onClick={this.handleClick}
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={this.handleClose}
            >
              <MenuItem onClick={this.handleClose}>Profile</MenuItem>
              <MenuItem onClick={this.handleClose}>My account</MenuItem>
              <MenuItem onClick={this.handleClose}>Logout</MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
      </div>
    )
  }

}

MainAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({

})

export default compose(
  withStyles(styles),
  connect(mapStateToProps, appMenuActions),
)(MainAppBar)
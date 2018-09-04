import React from 'react'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import * as authActions from 'store/actions/auth-actions'
import * as authSelectors from 'store/selectors/auth-selectors'

import { Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import AccountCircle from '@material-ui/icons/AccountCircle'
import {
  ClickAwayListener,
  Grow,
  Paper,
  Popper,
  MenuItem,
  MenuList,
} from '@material-ui/core'

/* Dev */
// eslint-disable-next-line
import { green } from 'logger'

class AccountMenu extends React.Component {
  state = {
    open: false,
  }
  handleToggle = () => {
    this.setState(state => ({ open: !state.open }))
  }

  handleClose = (event, action) => {
    if (this.anchorEl.contains(event.target)) {
      return
    }
    this.setState({ open: false })
    if (action === 'logout') {
      this.props.userLogoutRequest()
    }
  }

  render() {
    const { open } = this.state
    const { classes, emailName } = this.props
    return (
      <React.Fragment>
        <Button
          buttonRef={node => {
            this.anchorEl = node
          }}
          aria-owns={open ? 'menu-list-grow' : null}
          aria-haspopup="true"
          onClick={this.handleToggle}
          className={classes.label}
        >
          <div className={classes.content}>
            <div id='circle'><AccountCircle /></div>
            <div id='name'>{emailName}</div>
          </div>
        </Button>
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
                    <MenuItem onClick={(event) => this.handleClose(event, 'profile')}>Profile</MenuItem>
                    <MenuItem onClick={(event) => this.handleClose(event, 'settings')}><Link to='/settings'>Settings</Link></MenuItem>
                    <MenuItem onClick={(event) => this.handleClose(event, 'logout')}><Link to='/events'>Logout</Link></MenuItem>
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

const styles = {
  content: {
    display: 'flex',
    flexFlow: 'column nowrap',
    justtifyContent: 'center',
    alignItems: 'space-between',
  },
  label: {
    color: 'white',
  }
}

const nameFromEmail = (email) => {
  if (email === undefined) {
    return undefined
  }
  const idx = email.indexOf('@')
  return email.slice(0, idx)
}

const mapStateToProps = (state) => ({
  emailName: nameFromEmail(authSelectors.getEmailName(state))
})

export default compose(
  withStyles(styles),
  connect(mapStateToProps, authActions),
)(AccountMenu)

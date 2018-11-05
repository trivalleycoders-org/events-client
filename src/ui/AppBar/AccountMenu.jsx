import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'recompose'
import { withStyles } from '@material-ui/core/styles'
import AccountCircle from '@material-ui/icons/AccountCircle'
import {
  Button,
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
} from '@material-ui/core'
// import { nameFromEmail } from 'lib/nameFromEmail'
/* Dev */
// eslint-disable-next-line
import { green, purple } from 'logger'
import { logRender } from 'logging'

class AccountMenu extends React.Component {
  state = {
    open: false,
  }

  handleToggle = () => {
    this.setState(state => ({ open: !state.open }))
  }

  handleClose = (event, menu) => {
    if (this.anchorEl.contains(event.target)) {
      return
    }
    this.setState({
      open: false,
    })
    this.props.handleMenuClick(event, menu)
  }

  render() {
    logRender && purple('AccountMenu - render')
    const { open } = this.state
    const { classes, emailName } = this.props

    return (
      <div id='AccountMenu'>
        <Button
          buttonRef={node => {
            this.anchorEl = node
          }}
          aria-owns={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={this.handleToggle}
        >
          <div className={classes.content}>
            <div id='circle'>
              <AccountCircle className={classes.accountCircle}/>
            </div>
            <div id='name' className={classes.emailName}>
              {emailName}
            </div>
          </div>
        </Button>
        <Popper
          open={open}
          anchorEl={this.anchorEl}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              id="menu-list-grow"
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={this.handleClose}>
                  <MenuList>
                    <MenuItem onClick={(event) => this.handleClose(event, 'settings')}>Settings</MenuItem>
                    <MenuItem name='logout' onClick={(event) => this.handleClose(event, 'logout')}>Logout</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    )
  }

}

const styles = theme => ({
  link: {
    color: 'black',
  },
  emailName: {
    color: theme.palette.primary.contrastText,
  },
  accountCircle: {
    color: theme.palette.primary.contrastText,
  },
  content: {
    display: 'flex',
    flexFlow: 'column nowrap',
    justtifyContent: 'center',
    alignItems: 'space-between',
  },
})

export default compose(
  withStyles(styles),
)(AccountMenu)

AccountMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  emailName: PropTypes.string.isRequired,
  handleMenuClick: PropTypes.func.isRequired,
}

import React from 'react'
import { compose } from 'recompose'
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
import { nameFromEmail } from 'lib/nameFromEmail'
/* Dev */
// eslint-disable-next-line
import { green, purple } from 'logger'
import { logRender } from 'logging'


const linkStyle = {
  textDecoration: 'none'
}

class AccountMenu extends React.Component {
  state = {
    open: false,
  }

  handleToggle = () => {
    this.setState(state => ({ open: !state.open }))
  }

  handleClose = (event, action) => {
  }

  render() {
    logRender && purple('AccountMenu - render')
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
            <div id='circle'>
              <AccountCircle className={classes.accountCircle}/>
            </div>
            <div id='name' className={classes.emailName}>
              {emailName}
            </div>
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
                    <MenuItem onClick={(event) => this.handleClose(event, 'settings')}>
                      <Link to='/settings' className={classes.link} style={linkStyle}>Settings</Link>
                    </MenuItem>
                    <MenuItem onClick={(event) => this.handleClose(event, 'logout')}>
                      <Link to='/' style={linkStyle} className={classes.link}>Logout</Link>
                    </MenuItem>
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

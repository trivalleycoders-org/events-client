import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import { AppBar } from '@material-ui/core'
import { Toolbar } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import { Button } from '@material-ui/core'
import { IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import * as appMenuActions from 'store/actions/app-menu-actions'
// import { menuItems } from './tileData'
// import SearchEvent from 'ui/SearchEvent'
/* Dev */
// eslint-disable-next-line
import { green } from 'logger'

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

function MainAppBar(props) {
  const { classes, appMenuToggle } = props
  const toggleDraw = () => {
    // green('toggleDraw', props)
    appMenuToggle()
  }
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={toggleDraw}>
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.flex}>
            Drone Events
          </Typography>
          <Link to='/events'><Button colro='inherit'>Home</Button></Link>
          <Link to='/new-event'><Button color='inherit'>Create Event</Button></Link>
          <Link to='/my-events'><Button color='inherit'>My Events</Button></Link>
          <Link to='/register'><Button color='inherit'>Register</Button></Link>
          <Link to='/login'><Button color='inherit'>Login</Button></Link>
          <Link to='/settings'><Button color='inherit'>Settings</Button></Link>

        </Toolbar>
      </AppBar>
    </div>
  )
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
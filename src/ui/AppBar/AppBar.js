import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import { AppBar } from '@material-ui/core'
import { Toolbar } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import { Button } from '@material-ui/core'
import { IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

import SearchEvent from './SearchEvent'

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
  const { classes } = props
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.flex}>
            Drone Events
          </Typography>

          <SearchEvent />
          <Link to='/'><Button colro='inherit'>Home</Button></Link>
          <Link to='/new-event'><Button colro='inherit'>New Event</Button></Link>
          <Link to='/upload'><Button colro='inherit'>Upload</Button></Link>
          <Link to='/tags'><Button colro='inherit'>Tags</Button></Link>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

MainAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(MainAppBar)

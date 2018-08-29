import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import { AppBar } from '@material-ui/core'
import { Toolbar } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import ButtonNavLink from 'ui/ui-elements/ButtonNavLink'
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


          <ButtonNavLink to='/search-events/health'>
            Health
          </ButtonNavLink>
          <ButtonNavLink to='/search-events/briia'>
            Briia
          </ButtonNavLink>


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
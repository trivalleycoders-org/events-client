import React from 'react'
import PropTypes from 'prop-types'
import {
  Route,
  Switch,
} from 'react-router-dom'
import { compose } from 'recompose'
import { withStyles } from '@material-ui/core/styles'

// User
import PrivateRoute from 'ui/auth/PrivateRoute'
import LoginForm from 'ui/auth/LoginForm'
import RegisterForm from 'ui/auth/RegisterForm'
import SettingsForm from 'ui/auth/SettingsForm'
import AppBar from 'ui/AppBar'

import Events from 'ui/Events'
import MyEvents from 'ui/MyEvents'
import EventDetails from 'ui/EventDetails'
import EventForm from 'ui/EventForm'
import SearchEvents from 'ui/SearchEvents'
import AppDrawer from 'ui/AppDrawer'
import Footer from 'ui/Footer'
import Hero from 'ui/Hero'
// Dev
// eslint-disable-next-line
import { green, yellow, orange, red, purple } from 'logger'

const App = (props) => {
  const { classes } = props

  purple('App - render')
  // green('App: props', props)
  // green('App: history.pathname', props.history.location.pathname)

  return (
    <div id='App-wrapper' className={classes.wrapper}>
      <div id='App-appbar' className={classes.appbar}>
        <AppBar />

      </div>
      <Hero />
      <AppDrawer />
      <div id='App-content' className={classes.content}>
        <Switch>
          <PrivateRoute exact path='/settings' component={SettingsForm} />
          <Route exact path='/' component={Events} />
          <PrivateRoute exact path='/my-events' component={MyEvents} />
          <PrivateRoute exact path='/create-event' component={EventForm} />
          <Route path='/search-events' component={SearchEvents} />
          <PrivateRoute exact path='/edit-event/:id' component={EventForm} />
          <PrivateRoute exact path='/event-details/:id' component={EventDetails} />
          <Route exact path='/login' component={LoginForm} />
          <Route exact path='/register' component={RegisterForm} />

        </Switch>
      </div>
      <footer id='App-footer' className={classes.footer}>
        <Footer />
      </footer>
    </div>
  )
}

const styles = theme => ({
  fakeContent: {
    height: 400,
  },
  wrapper: {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    border: '2px dashed white',
    flex: '1 0 auto',
    maxWidth: 1024,
    margin: '40px auto 40px auto',
  },
  footer: {
    // border: '2px dashed black',
    // backgroundColor: 'darkgrey',
    backgroundColor: '#2b3137',
    flexShrink: 0,
    flexGrow: 0,
  },
  appbar: {
    paddingTop: 56,
    [theme.breakpoints.up('sm')]: {
      paddingTop: 64,
    },

  },
})

export default compose(
  withStyles(styles),
)(App)


App.propTypes = {
  // appMenuToggle: PropTypes.func.isRequired,
  // emailName: PropTypes.string.isRequired,
  // isloggedIn: PropTypes.bool.isRequired,
  // userId: PropTypes.string.isRequired
}
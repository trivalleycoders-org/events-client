import React from 'react'
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

const App = (props) => {
  const { classes } = props

  return (
    <div id='App-wrapper' className={classes.wrapper}>
      {/* <Breakpoints /> */}
      <div id='App-appbar' className={classes.appbar}>
        <AppBar />

      </div>
      <div>
        <Hero />
      </div>
      <AppDrawer />
      <div id='App-content' className={classes.contentWrapper}>
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
  contentWrapper: {
    flex: '1 0 auto',
    margin: 0,
    [theme.breakpoints.only('sm')]: {
      // margin: '0 5%',
    },
    [theme.breakpoints.only('md')]: {
      margin: '0 10%',
    },
    [theme.breakpoints.only('lg')]: {
      margin: '0 15%',
    },
    [theme.breakpoints.only('xl')]: {
      margin: '0 15%',
    },
  },
  content: {
    height: '100%',
  },
  footer: {
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

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
import AppBarContainer from 'ui/AppBarContainer'

import EventsContainer from 'ui/EventsContainer'
import MyEventsContainer from 'ui/MyEventsContainer'
import EventDetailsContainer from 'ui/EventDetailsContainer'
import EventFormContainer from 'ui/EventFormContainer'
import SearchEventsContainer from 'ui/SearchEventsContainer'
import AppDrawer from 'ui/AppDrawer'
import Footer from 'ui/Footer'
import Hero from 'ui/Hero'
// Dev
// eslint-disable-next-line
import { green, yellow, orange, red, purple } from 'logger'
// import Breakpoints from 'ui/elements/Breakpoints'
// import ContentFiller from './ContentFiller'

const App = (props) => {
  const { classes } = props
  green('props', props)
  return (
    <div id='App-wrapper' className={classes.wrapper}>
      {/* <Breakpoints /> */}
      <div id='App-appbar' className={classes.appbar}>
        <AppBarContainer />
        <Hero />
        <AppDrawer />
      </div>
      <div id='App-content' className={classes.content}>
        <Switch>
          <Route exact path='/' component={EventsContainer} />
            <PrivateRoute exact path='/my-events' component={MyEventsContainer} />
            <PrivateRoute exact path='/create-event' component={EventFormContainer} />
            <Route path='/search-events' component={SearchEventsContainer} />
            <PrivateRoute exact path='/edit-event/:id' component={EventFormContainer} />
            <PrivateRoute exact path='/event-details/:id' component={EventDetailsContainer} />
            <Route exact path='/login' component={LoginForm} />
            <Route exact path='/register' component={RegisterForm} />
            <PrivateRoute exact path='/settings' component={SettingsForm} />
        </Switch>
      </div>
      <footer id='App-footer' className={classes.footer}>
        <Footer />
      </footer>
    </div>
  )
}

/*
<div className={classes.fakeContent}>
          <Typography variant='h6' align='center'>
            Footer
          </Typography>
        </div>

*/

const styles = theme => ({
  fakeContent: {
    height: 400,
  },
  wrapper: {
    backgroundColor: 'white',
    // height: '100%',
    display: 'flex',
    flexDirection: 'column',
    // alignItems: 'center',
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
  emailName: PropTypes.string.isRequired,
  isloggedIn: PropTypes.bool.isRequired,
  userId: PropTypes.string.isRequired
}
import React from 'react'
import {
  Route,
  Switch,
} from 'react-router-dom'
import { compose } from 'recompose'
import { withStyles } from '@material-ui/core/styles'

// User
import Hero from 'ui/Hero'
import LoginForm from 'ui/Auth/LoginForm'
import PageMessage from 'ui/ui-elements/PageMessage'
import PrivateRoute from 'ui/PrivateRoute'
import RegisterForm from 'ui/Auth/RegisterForm'
import SettingsForm from 'ui/Auth/SettingsForm'
import AppBar from 'ui/AppBar'
// import Snackbars from 'ui/Snackbars'
import AppDrawer from 'ui/AppDrawer'

// New
import EventsContainer from 'ui/EventsContainer'
import MyEventsContainer from 'ui/MyEventsContainer'
import EventFormContainer from 'ui/EventFormContainer'
import EventDetailsContainer from 'ui/EventDetailsContainer'
import SearchEventsContainer from 'ui/SearchEventsContainer'
import Footer from 'ui/Footer'

// Design
// import Palette from 'ui/ui-design/Palette'
// import TypographyGuide from 'ui/ui-design/TypographyGuide'

// Dev
// eslint-disable-next-line
import { green, yellow, orange, red } from 'logger'
import Breakpoints from 'ui/ui-elements/Breakpoints'

const App = ({ classes }) => {

    return (
      <div id='App'>
        <AppBar />
        <div id='App-wrapper' className={classes.wrapper}>
          <Hero />
          <div id='App-wrapper-body' className={classes.body}>
            <PageMessage />
            <AppDrawer />
            <Breakpoints />
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
        </div>
        <Footer />
      </div>
    )
  }

/* Save these for now
<Route exact path='/palette' component={Palette} />
<Route exact path='/typography' component={TypographyGuide} />
*/

const styles = theme => ({
  wrapper: {
    marginTop: 64,
    backgroundColor: 'rgb(225, 225, 225)',
    // backgroundColor: 'green',
    // borderTop: '3px orange solid',
    // borderBottom: '3px orange solid',
    [theme.breakpoints.up('xs')]: {
      marginTop: 56,
    }
  },
  body: {
    // borderTop: '3px orange dashed',
    // border: '3px orange dashed',
    // backgroundColor: 'orange',

    // paddingTop: theme.spacing.unit * 5,
    // paddingBottom: theme.spacing.unit * 5,
    width: 'auto',
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    [theme.breakpoints.up('md')]: {
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3,
    },

    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },

})


export default compose(
  withStyles(styles),
)(App)

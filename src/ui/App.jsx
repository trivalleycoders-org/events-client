import React, { Fragment } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { withStyles } from '@material-ui/core/styles'
// User
import * as authActions from '../store/actions/auth-actions.js'
import AppBar from 'ui/AppBar'
import Events from 'ui/Events'
import SearchEvents from 'ui/SearchEvents'
import EventForm from 'ui/EventForm'
import withRoot from './withRoot'
import RegisterForm from './Auth/RegisterForm'
import LoginForm from './Auth/LoginForm'
import SettingsForm from './Auth/SettingsForm'
import Snackbars from 'ui/Snackbars'
import AppMenu from 'ui/AppMenu'
import RouteNotfound from 'ui/RouteNotFound'


class App extends React.Component {

  render() {
    const { currentUser, classes } = this.props
    return (
      <Router>
        <Fragment>
          <AppBar />
          <Snackbars />
          <AppMenu />
          <div className={classes.page}>
            <Switch>
              <Route exact path='/new-event' component={EventForm} />
              <Route exact path='/new-event/:_id' component={EventForm} />
              <Route exact path='/register' component={RegisterForm} />
              <Route exact path='/login' component={LoginForm} />
              <Route exact path='/settings' component={SettingsForm} />
              <Route exact path='/search-events/:searchValue' component={SearchEvents} />
              <Route exact path='/my-events' component={Events} />
              <Route exact path='/events' component={Events} />
              <Route exact path='/' component={Events} />
              <Route component={RouteNotfound} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    )
  }
}

// <Route exact path='/search/:searchValue' component={Events} />
   //        <Route exact path='/my-events/:user' component={Events} />

const mapStateToProps = (state) => {
  return {
    currentUser: state.auth.currentUser,
  }
}

const styles = {
  page: {
    marginTop: 80
  }
}

export default compose(
  withStyles(styles),
  connect(mapStateToProps, authActions)
)(withRoot(App))

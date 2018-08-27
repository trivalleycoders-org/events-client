import React, { Fragment } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
// import { compose } from 'recompose'
import { bindActionCreators } from 'redux'
// User
import * as authActions from '../store/actions/auth-actions.js'
import AppBar from 'ui/AppBar'
// import Home from 'ui/Home'
import Events from 'ui/Events'
import EventForm from 'ui/EventForm'
import withRoot from './withRoot'
import MyEvents from 'ui/MyEvents'
import RegisterForm from './Auth/RegisterForm'
import LoginForm from './Auth/LoginForm'
import SettingsForm from './Auth/SettingsForm'
import Snackbars from 'ui/Snackbars'
import AppMenu from 'ui/AppMenu'
import SearchEvent from 'ui/SearchEvent'
import RouteNotfound from 'ui/RouteNotFound'
// import AutosuggestRedux from 'ui/ui-elements/AutosuggestRedux'


class App extends React.Component {

  render() {
    const { currentUser } = this.props
    return (
      <Router>
        <Fragment>
          <AppBar />
          <Snackbars />
          <AppMenu />
          <Switch>
            <Route exact path='/new-event' component={EventForm} />
            <Route exact path='/new-event/:_id' component={EventForm} />
            <Route exact path='/register' component={RegisterForm} />
            <Route exact path='/login' component={LoginForm} />
            <Route exact path='/settings' component={SettingsForm} />
            <Route exact path='/search/:searchValue' component={Events} />
            <Route exact path='/my-events' component={Events} />
            <Route exact path='/events' component={Events} />
            <Route component={RouteNotfound} />
          </Switch>
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
    redirectTo: state.auth.redirectTo
  }
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(Object.assign({}, eventActions, authActions), dispatch)
// }

export default connect(mapStateToProps, authActions)(withRoot(App))

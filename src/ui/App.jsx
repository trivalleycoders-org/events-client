import React, { Fragment } from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
// User
import * as eventActions from 'store/actions/event-actions'
import * as authActions from '../store/actions/auth-actions.js'
import AppBar from 'ui/AppBar'
import Home from 'ui/Home'
import EventForm from 'ui/EventForm'
import withRoot from './withRoot'
import MyEvents from 'ui/MyEvents'
import RegisterForm from './Auth/RegisterForm'
import LoginForm from './Auth/LoginForm'
import SettingsForm from './Auth/SettingsForm'
import Snackbars from 'ui/Snackbars'
import AppMenu from 'ui/AppMenu'
// import AutosuggestRedux from 'ui/ui-elements/AutosuggestRedux'


class App extends React.Component {
  componentDidMount() {
    this.props.requestReadEvents()
  }

  render() {
    return (
      <Router>
        <Fragment>
          <AppBar />
          <Snackbars />
          <AppMenu />
          <Route exact path='/my-events' component={MyEvents} />
          <Route exact path='/new-event' component={EventForm} />
          <Route exact path='/new-event/:_id' component={EventForm} />
          <Route exact path='/register' component={RegisterForm} />
          <Route exact path='/login' component={LoginForm} />
          <Route exact path='/settings' component={SettingsForm} />
          <Route exact path='/' component={Home} />
        </Fragment>
      </Router>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.auth.currentUser,
    redirectTo: state.auth.redirectTo
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign({}, eventActions, authActions), dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(withRoot(App))

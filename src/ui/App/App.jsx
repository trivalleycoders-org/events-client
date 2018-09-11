import React, { Fragment } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { withStyles } from '@material-ui/core/styles'
import { parse } from '../../api/cookie-parser'
import jwt from 'jsonwebtoken'

// User
import * as authActions from 'store/actions/auth-actions'
import * as authSelectors from 'store/selectors/auth-selectors'

import AppBar from 'ui/AppBar'
import Events from 'ui/Events'
import SearchEvents from 'ui/SearchEvents'
import EventForm from 'ui/EventForm'
import withRoot from 'ui/withRoot'
import RegisterForm from 'ui/Auth/RegisterForm'
import LoginForm from 'ui/Auth/LoginForm'
import SettingsForm from 'ui/Auth/SettingsForm'
import Snackbars from 'ui/Snackbars'
import AppMenu from 'ui/AppMenu'
import RouteNotfound from 'ui/RouteNotFound'
import PageMessage from 'ui/ui-elements/PageMessage'
import PrivateRoute from 'ui/PrivateRoute'

// eslint-disable-next-line
import { green } from 'logger'

class App extends React.Component {

  constructor(props) {
    super(props)
    const { userValidateRequest } = this.props
    let user
    if (document.cookie) {
      const tokenObj = parse(document.cookie)
      const decoded = jwt.decode(tokenObj.token, { complete: true })

      user = {
        id: decoded.payload.id,
        email: decoded.payload.email,
        token: tokenObj.token
      }

      userValidateRequest(user)
    }
  }

  componentDidUpdate() {
    green('App.componentDidUpdate')
  }

  render() {

    const { currentUser, classes } = this.props
    green('App: currentUser', currentUser.id)
    green('App: props', this.props)
    return (
      <Router>
        <Fragment>
          <AppBar />
          <Snackbars />
          <AppMenu />
          <div className={classes.page}>
            <PageMessage></PageMessage>
            <Switch>
              <Route exact path='/new-event' component={EventForm} />
              <PrivateRoute exact path='/new-event/:_id' component={EventForm} />
              <Route exact path='/register' component={RegisterForm} />
              <Route exact path='/login' component={LoginForm} />
              <PrivateRoute exact path='/settings' component={SettingsForm} />
              <Route exact path='/search-events/:searchValue' component={SearchEvents} />
              <PrivateRoute exact path='/my-events' component={Events} />
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

const mapStateToProps = (state) => {
  return {
    currentUser: authSelectors.getUserId
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

/*
<Route exact path='/my-events' render={() => {
                if (currentUser === undefined) {
                  green('App - go to /login')
                  // return <Route exact path='/login' component={LoginForm} />
                  return <Redirect to='/login' />
                } else {
                  green('App - go to /my-events')
                  return <Route exact path='/my-events' component={Events} />
                }
              }}/>
*/
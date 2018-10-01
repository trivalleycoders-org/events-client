import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { withStyles } from '@material-ui/core/styles'
import { parse } from '../../api/cookie-parser'
import jwt from 'jsonwebtoken'

// User
import * as authActions from 'store/actions/auth-actions'
import { userValidateRequestKey } from 'store/actions/auth-actions'
import * as pageMessageActions from 'store/actions/page-message-actions'
import * as requestSelectors from 'store/selectors/request-selectors'

import Breakpoints from 'ui/ui-elements/Breakpoints'
import Events from 'ui/Events'
import EventForm from 'ui/EventForm'
import Hero from 'ui/Hero'
import LoginForm from 'ui/Auth/LoginForm'
import PageMessage from 'ui/ui-elements/PageMessage'
import Palette from 'ui/ui-design/Palette'
import PrivateRoute from 'ui/PrivateRoute'
import RegisterForm from 'ui/Auth/RegisterForm'
import RouteNotfound from 'ui/RouteNotFound'
import SearchEvents from 'ui/SearchEvents'
import SettingsForm from 'ui/Auth/SettingsForm'
import TypographyGuide from 'ui/ui-design/TypographyGuide'
import withRoot from 'ui/withRoot'
import AppBar from 'ui/AppBar'
import Snackbars from 'ui/Snackbars'
import AppDrawer from 'ui/AppDrawer'

// eslint-disable-next-line
import { green, yellow } from 'logger'

class App extends React.Component {
  constructor(props) {
    green('1) constructor start')
    super(props)

    green('2) constructor before this.state')
    this.state = {
      hasCookie: false,
      mountDone: false,
    }
    green('3) constructor end')
  }

  // componentWillMount() {
  //   green('4) componentWillMount')
  // }

  static getDerivedStateFromProps(props, state) {
    green('** getDerivedStateFromProps')
    return state
  }

  async componentDidMount() {
    green('5) componentDidMount start')
    const { userValidateRequest } = this.props
    let user
    if (document.cookie) {
      yellow('has cookie true')
      const tokenObj = parse(document.cookie)
      const decoded = jwt.decode(tokenObj.token, { complete: true })

      user = {
        id: decoded.payload.id,
        email: decoded.payload.email,
        token: tokenObj.token
      }

      await userValidateRequest(user)
    }
    this.setState({ mountDone: true })
    green('6) componentDidMount end')
  }

  render() {
    green('7) component render')
    const { classes } = this.props
    return (
      <Router>
        <Fragment>
          <AppBar />
          <Snackbars />
          <AppDrawer />
          <div className={classes.wrapper}>
            <Breakpoints />
            <PageMessage></PageMessage>
            <Hero />
            {
              !this.state.mountDone
                ? null
                : <div className={classes.body}>
                    <Switch>
                      <PrivateRoute exact path='/event-details' component={Events} />
                      <Route exact path='/events' component={Events} />
                      <Route exact path='/login' component={LoginForm} />
                      <PrivateRoute exact path='/my-events' component={Events} />
                      <Route exact path='/new-event' component={EventForm} />
                      <Route exact path='/edit-event' component={EventForm} />
                      <Route exact path='/palette' component={Palette} />
                      <Route exact path='/register' component={RegisterForm} />
                      <Route exact path='/search-events/:searchValue' component={SearchEvents} />
                      <PrivateRoute exact path='/settings' component={SettingsForm} />
                      <Route exact path='/typography' component={TypographyGuide} />
                      <Route exact path='/' component={Events} />
                      <Route component={RouteNotfound} />
                    </Switch>
                  </div>
            }

          </div>
        </Fragment>
      </Router>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userValidateRequestStatus:  requestSelectors.getRequest(state, userValidateRequestKey)
  }
}

const styles = theme => ({
  wrapper: {
    marginTop: 60,
  },
  body: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },

})

const actions = { ...authActions, ...pageMessageActions}

export default compose(
  withStyles(styles),
  connect(mapStateToProps, actions)
)(withRoot(App))




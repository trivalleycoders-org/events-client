import React from 'react'
import {
  Route,
  Switch,
  withRouter
} from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { withStyles } from '@material-ui/core/styles'
import { parse } from '../../api/cookie-parser'
import jwt from 'jsonwebtoken'
import 'url-search-params-polyfill'

// Store
import { eventsForUserReadRequest, eventsReadRequest } from 'store/actions/event-actions'
import { userValidateRequest, userValidateRequestKey } from 'store/actions/auth-actions'
import { getLoggedIn } from 'store/selectors/auth-selectors'
import { getRequest } from 'store/selectors/request-selectors'
import { eventsSearchReadRequest, searchTextSet, searchTextUnset } from 'store/actions/search-actions'

// User

import Hero from 'ui/Hero'
import LoginForm from 'ui/Auth/LoginForm'
import PageMessage from 'ui/ui-elements/PageMessage'

import PrivateRoute from 'ui/PrivateRoute'
import RegisterForm from 'ui/Auth/RegisterForm'
import SettingsForm from 'ui/Auth/SettingsForm'
import withRoot from 'ui/withRoot'
import AppBar from 'ui/AppBar'
// import Snackbars from 'ui/Snackbars'
// import AppDrawer from 'ui/AppDrawer'

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
// import Breakpoints from 'ui/ui-elements/Breakpoints'

import BreakBottom from 'ui/ui-elements/BreakBottom'

const componentName = 'App'
const log = false

class App extends React.Component {
  constructor(props) {
    log && orange(`${componentName} - Constructor - START`)
    super(props)
    let user
    if (document.cookie) {
      const tokenObj = parse(document.cookie)
      const decoded = jwt.decode(tokenObj.token, { complete: true })
      user = {
        id: decoded.payload.id,
        email: decoded.payload.email,
        token: tokenObj.token
      }
      this.props.userValidateRequest(user)

      this.state = {
        userId: user.id,
      }
      // green(`${componentName} - cookie found with userId`, user.id)
    } else {
      // green(`${componentName} - cookie NOT found`)
      this.state = {
        userId: undefined,
      }
    }

    log && orange(`${componentName} - Constructor - END`)
  }

  loadData = async (from, prevProps = undefined ) => {
    // green('loadData: from:', from)
    const { userId } = this.state
    const {
      eventsReadRequest,
      eventsForUserReadRequest,
      eventsSearchReadRequest
    } = this.props

    const currPath = this.props.location.pathname

    if (/^\/search-events\//.test(currPath)) {
      let prevSearch
      const currSearch = this.props.location.search
      if (prevProps !== undefined) {
        prevSearch = prevProps.location.search
      } else {
        prevSearch = undefined
      }
      const params = new URLSearchParams(this.props.location.search)
      const searchString = params.get('searchString')
      this.props.searchTextSet(searchString)
      if (prevSearch !== currSearch) {
        await eventsSearchReadRequest(searchString)
      }
    } else {
      this.props.searchTextUnset()
      let prevPath = undefined
      if (!prevProps === undefined) {
        prevPath = prevProps.location.pathname
      }
      if (currPath !== prevPath) {
        switch (currPath) {
          case '/':
            // green('** getting all events')
            // green(`${componentName} - case /`)
            await eventsReadRequest()
            break
          case '/my-events':
            // green(`${componentName} - case /my-events`)
            await eventsForUserReadRequest(userId)
            break
          case '/create-event':
          case '/login':
          case '/register':
          case '/settings':
            break
          default:
            red(`App.loadData: unknown route path ${currPath}`)
        }
      }
    }

  }

  componentDidMount() {
    log && orange(`${componentName} - Mount - START`)
    // green('load data', this.loadData)
    // this.loadData('mount')

    // this.someFun('hi')
    this.loadData('mount')

    log && orange(`${componentName} - Mount - END`)
  }

  async componentDidUpdate(prevProps, prevState, snapshot) {
    log && orange(`${componentName} - Update - START`)
    // green('update.prevProps', prevProps)

    await this.loadData('update', prevProps)
    log && orange(`${componentName} - Update - END`)
  }

  render() {

    const { classes, userId, userValidateRequestStatus } = this.props

    if (!userId === undefined) {
      if (userValidateRequestStatus !== 'success') {
        return null
      }
    }

    return (
        <div id='App'>
          <AppBar />
          <div id='App-wrapper' className={classes.wrapper}>
            <Hero />
            <div id='App-wrapper-body' className={classes.body}>
              <PageMessage />
              <BreakBottom />
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
}
/* Save these for now
<Route exact path='/palette' component={Palette} />
<Route exact path='/typography' component={TypographyGuide} />
*/

const styles = theme => ({
  wrapper: {
    marginTop: 64,
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
    paddingTop: theme.spacing.unit * 5,
    paddingBottom: theme.spacing.unit * 5,
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

const actions = { eventsForUserReadRequest, userValidateRequest, eventsReadRequest, eventsSearchReadRequest, searchTextSet, searchTextUnset }

const mapStateToProps = (state) => {
  return {
    userValidateRequestStatus: getRequest(state, userValidateRequestKey),
    loggedIn: getLoggedIn(state)
  }
}

export default compose(
  withRouter,
  withStyles(styles),
  connect(mapStateToProps, actions),
  withRoot
)(App)
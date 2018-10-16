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
// import { getUserId } from 'store/selectors/auth-selectors'
import * as pageMessageActions from 'store/actions/page-message-actions'
import * as requestSelectors from 'store/selectors/request-selectors'
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
import Breakpoints from 'ui/ui-elements/Breakpoints'
import { green, yellow, orange, red } from 'logger'

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
    // console.log('*** prev === ', typeof prevProps)
    const { userId } = this.state
    const {
      eventsReadRequest,
      eventsForUserReadRequest,
      eventsSearchReadRequest
    } = this.props

    const currPath = this.props.location.pathname

    if (/^\/search-events\//.test(currPath)) {
      let prevSearch
      // console.log('*** props.location.search', this.props.location.search)
      const currSearch = this.props.location.search
      if (prevProps !== undefined) {
        // console.log('*** prevProps.location.search', prevProps.location.search)
        prevSearch = prevProps.location.search
      } else {
        // console.log('*** prevProps.location.search', undefined)
        prevSearch = undefined

      }
      green('** search')
      const params = new URLSearchParams(this.props.location.search)
      const searchString = params.get('searchString')
      this.props.searchTextSet(searchString)
      green('currSearchString', searchString)
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
    const { classes } = this.props
    return (
        <div id='App'>
          <AppBar />
          <PageMessage></PageMessage>
          <Hero />
          <div id='App-wrapper' className={classes.wrapper}>
            <div id='App-wrapper-body' className={classes.body}>
              {/* <Breakpoints /> */}
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
// <Route exact path='/search-events/:searchValue' component={SearchEvents} />

const styles = theme => ({
  wrapper: {
    marginTop: 0,
    backgroundColor: 'green',
    borderTop: '3px orange solid',
    borderBottom: '3px orange solid',
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

const actions = { eventsForUserReadRequest, userValidateRequest, eventsReadRequest, eventsSearchReadRequest, searchTextSet, searchTextUnset, ...pageMessageActions }

const mapStateToProps = (state) => {
  return {
    userValidateRequestStatus: requestSelectors.getRequest(state, userValidateRequestKey),
    // currentUserId: getUserId(state), // getting it from state set in constructor
  }
}

export default compose(
  withRouter,
  withStyles(styles),
  connect(mapStateToProps, actions),
  withRoot
)(App)




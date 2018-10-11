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

// Store
import { eventsForUserReadRequest, eventsReadRequest } from 'store/actions/event-actions'
import { userValidateRequest, userValidateRequestKey } from 'store/actions/auth-actions'
// import { getUserId } from 'store/selectors/auth-selectors'
import * as pageMessageActions from 'store/actions/page-message-actions'
import * as requestSelectors from 'store/selectors/request-selectors'

// User
import Breakpoints from 'ui/ui-elements/Breakpoints'
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
import EventCardsContainer from 'ui/EventCardsContainer/EventCardsContainer'
import MyEventsContainer from 'ui/MyEventsContainer'
import EventFormContainer from 'ui/EventFormContainer'
import EventDetailsContainer from 'ui/EventDetailsContainer'

// Delete

// import SearchEvents from 'ui/SearchEvents'
// import RouteNotfound from 'ui/RouteNotFound'
// import TypographyGuide from 'ui/ui-design/TypographyGuide'
// import EventsController from 'ui/EventsController'

// import Palette from 'ui/ui-design/Palette'

// eslint-disable-next-line
import { green, yellow, orange, red } from 'logger'
import SearchBox from '../SearchBox/SearchBox'

const componentName = 'App'
const log = true

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
      green(`${componentName} - cookie found with userId`, user.id)
    } else {
      green(`${componentName} - cookie NOT found`)
      this.state = {
        userId: undefined,
      }
    }


    log && orange(`${componentName} - Constructor - END`)
  }

  loadData = async (from, prevProps = undefined) => {
    red('loadData', from)
    const { userId } = this.state
    const { eventsReadRequest, eventsForUserReadRequest } = this.props
    const currPath = this.props.location.pathname
    let prevPath = undefined
    if (prevProps !== undefined) {
      prevPath = prevProps.location.pathname
      green(`${componentName} - loadData: prevPath`, prevPath)
    }
    green(`${componentName} - loadData: currPath`, currPath)

    if (userId === undefined) {
      red('loadData', `from: ${from}, path: ${this.props.location.pathname}`)
    } else {
      green('loadData', `from: ${from}, path: ${this.props.location.pathname}`)
    }
    if (currPath !== prevPath) {
      switch (currPath) {
        case '/':
          green(`${componentName} - case /`)
          await eventsReadRequest()
          break
        case '/my-events':
          green(`${componentName} - case /my-events`)
          await eventsForUserReadRequest(userId)
          break
        default:
          red('default - oh no!')
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
    // this.loadData('update', prevProps)
    await this.loadData('update', prevProps)
    log && orange(`${componentName} - Update - END`)
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.wrapper}>
        <AppBar />
        <Breakpoints />
        <PageMessage></PageMessage>
        <Hero />
        <SearchBox />
        <div className={classes.wrapper}>
          <div className={classes.body}>
            <Switch>
              <Route exact path='/' component={EventCardsContainer} />
              <Route exact path='/my-events' component={MyEventsContainer} />
              <Route exact path='/create-event' component={EventFormContainer} />
              <Route exact path='/edit-event/:id' component={EventFormContainer} />
              <Route exact path='/event-details/:id' component={EventDetailsContainer} />
              <Route exact path='/login' component={LoginForm} />
              <Route exact path='/register' component={RegisterForm} />
              <PrivateRoute exact path='/settings' component={SettingsForm} />
            </Switch>
          </div>
        </div>
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

const actions = { eventsForUserReadRequest, userValidateRequest, eventsReadRequest, ...pageMessageActions }

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




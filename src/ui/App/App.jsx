import React from 'react'
import {
  Route,
  Switch ,
  withRouter
} from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { withStyles } from '@material-ui/core/styles'
import { parse } from '../../api/cookie-parser'
import jwt from 'jsonwebtoken'

// Store
import { eventsForUserReadRequest, eventsReadRequest } from 'store/actions/event-actions'

import { userValidateRequest, userValidateRequestKey} from 'store/actions/auth-actions'
import { getUserId } from 'store/selectors/auth-selectors'
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
import Snackbars from 'ui/Snackbars'
import AppDrawer from 'ui/AppDrawer'

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

const componentName = 'App'
const log = true

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasCookie: false,
    }
  }

  async componentDidMount() {
    log && orange(`${componentName} - Mount - START`)
    const { location, userValidateRequest, eventsReadRequest } = this.props
    green(`${componentName}`, 'before check cookie')
    let user

    if (document.cookie) {
      const tokenObj = parse(document.cookie)
      const decoded = jwt.decode(tokenObj.token, { complete: true })
      user = {
        id: decoded.payload.id,
        email: decoded.payload.email,
        token: tokenObj.token
      }
      await userValidateRequest(user)
    }

    green(`${componentName}`, 'after check cookie')
    green(`${componentName} props`, this.props)
    const xcurrentUserId = this.props.currentUserId
    green(`${componentName} currentUserId`, xcurrentUserId)

    green(`${componentName}`, 'before eventsReadRequest')
    const pathname = location.pathname
    green(`${componentName}: pathname`, pathname)

    if (pathname === '/') {
      await eventsReadRequest()
    } else if (pathname === '/my-events') {
      await this.props.eventsForUserReadRequest(xcurrentUserId)
    } else {
      console.assert(false, {
        component: componentName,
        msg: 'unknown pathname'
      })
    }

    green(`${componentName}`, 'after eventsReadRequest')

    log && orange(`${componentName} - Mount - END`)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    log && orange(`${componentName} - Update`)
  }

  render() {
    const { classes } = this.props
    return (
        <div className={classes.wrapper}>
          <AppBar />
          <Breakpoints />
          <PageMessage></PageMessage>
          <Hero />
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

const actions = { eventsForUserReadRequest, userValidateRequest, eventsReadRequest, ...pageMessageActions}

const mapStateToProps = (state) => {
  return {
    userValidateRequestStatus:  requestSelectors.getRequest(state, userValidateRequestKey),
    currentUserId: getUserId(state),
  }
}

export default compose(
  withRouter,
  withStyles(styles),
  connect(mapStateToProps, actions),
  withRoot
)(App)




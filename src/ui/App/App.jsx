import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
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
import Events from 'ui/Events'
import SearchEvents from 'ui/SearchEvents'
import EventForm from 'ui/EventForm'
import withRoot from 'ui/withRoot'
import RegisterForm from 'ui/Auth/RegisterForm'
import LoginForm from 'ui/Auth/LoginForm'
import SettingsForm from 'ui/Auth/SettingsForm'
import RouteNotfound from 'ui/RouteNotFound'
import PageMessage from 'ui/ui-elements/PageMessage'
import PrivateRoute from 'ui/PrivateRoute'
import TypographyGuide from 'ui/ui-design/TypographyGuide'
import Hero from 'ui/Hero'
import Breakpoints from 'ui/ui-elements/Breakpoints'
import Palette from 'ui/ui-design/Palette'

// eslint-disable-next-line
import { green } from 'logger'

class App extends React.Component {

  componentDidMount() {
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

  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.props.pageMessage('')
    }
  }

  render() {

    const { classes, location, userValidateRequestStatus } = this.props
    const showHero = location.pathname.startsWith('/search-events')
      || location.pathname === '/events'
      || location.pathname === '/'

    if (userValidateRequestStatus.status !== 'success') {
      return <h1>loading</h1>
    }
    return (
      <Fragment>
        <div className={classes.wrapper}>
          <Breakpoints />
          <PageMessage></PageMessage>
          {
            showHero
            ? <Hero />
            : null
          }
          <div className={classes.body}>
            <Switch>
              <Route exact path='/typography' component={TypographyGuide} />
              <Route exact path='/palette' component={Palette} />
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
        </div>
      </Fragment>
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
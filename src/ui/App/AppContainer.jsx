import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import {
  Route,
} from 'react-router-dom'
import { parse } from '../../api/cookie-parser'
import jwt from 'jsonwebtoken'
import 'url-search-params-polyfill'
import withRoot from 'ui/withRoot'

// Store
import { eventsForUserReadRequest, eventsReadRequest } from 'store/actions/event-actions'
import { userValidateRequest, userValidateRequestKey } from 'store/actions/auth-actions'
import { getLoggedIn } from 'store/selectors/auth-selectors'
import { getRequest, areRequestsPending } from 'store/selectors/request-selectors'
import { eventsSearchReadRequest, searchTextSet, searchTextUnset } from 'store/actions/search-actions'

// User
import App from './App'

// Dev
// eslint-disable-next-line
import { green, yellow, orange, red } from 'logger'

const componentName = 'AppContainer'
const log = false

class AppContainer extends React.Component {

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

  loadData = async (from, prevProps = undefined) => {
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
    } else if ((/^\/event-details\//.test(currPath))) {
      // no action needed
    } else if ((/^\/edit-event\//.test(currPath))) {

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
          case '/edit-event':
          case '/event-details':
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

    this.loadData('mount')

    log && orange(`${componentName} - Mount - END`)
  }

  async componentDidUpdate(prevProps, prevState, snapshot) {
    log && orange(`${componentName} - Update - START`)
    await this.loadData('update', prevProps)
    log && orange(`${componentName} - Update - END`)
  }

  render() {
    const { userValidateRequestStatus } = this.props
    const { userId } = this.state

    if (!(userId === undefined)) {
      if (userValidateRequestStatus.status !== 'success') {
        return <h1>Loading</h1>
      }
    }

    return (
      <Route render={props => (
          <App userId={userId}/>
      )}/>
    )
  }
}

const actions = { eventsForUserReadRequest, userValidateRequest, eventsReadRequest, eventsSearchReadRequest, searchTextSet, searchTextUnset }

const mapStateToProps = (state) => {
  return {
    userValidateRequestStatus: getRequest(state, userValidateRequestKey),
    loggedIn: getLoggedIn(state),
    requestsPending: areRequestsPending(state),
  }
}

export default compose(
  withRoot,
  connect(mapStateToProps, actions),
)(AppContainer)
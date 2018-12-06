import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { getLoggedIn } from 'store/selectors/auth-selectors'
import { userValidateRequestKey } from 'store/actions/auth-actions'
import { getRequest } from 'store/selectors/request-selectors'

const PrivateRoute = ({ component: Component, loggedIn, userValidateRequestStatus, ...rest }) => {
  return (
    <Route {...rest} render={(props) => (
      loggedIn
        ? <Component {...props} />
        : <Redirect to='/login' />
    )} />
  )
}

const mapStateToProps = (state) => ({
  userValidateRequestStatus: getRequest(state, userValidateRequestKey),
  loggedIn: getLoggedIn(state),
})

export default connect(mapStateToProps)(PrivateRoute)
import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { getLoggedIn } from 'store/selectors/auth-selectors'
import { userValidateRequestKey } from 'store/actions/auth-actions'
import { getRequest } from 'store/selectors/request-selectors'

// eslint-disable-next-line
import { green, blue } from 'logger'

const PrivateRoute = ({ component: Component, loggedIn, userValidateRequestStatus, ...rest }) => {

  // if (!loggedIn) {
  //   if (userValidateRequestStatus !== 'success') {
  //     return null
  //   }
  // }
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
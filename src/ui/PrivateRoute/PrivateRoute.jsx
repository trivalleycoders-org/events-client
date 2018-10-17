import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { getLoggedIn } from 'store/selectors/auth-selectors'

// eslint-disable-next-line
import { green, blue } from 'logger'

const PrivateRoute = ({ component: Component, loggedIn, ...rest }) => {
  return (
    <Route {...rest} render={(props) => (
      loggedIn
        ? <Component {...props} />
        : <Redirect to='/login' />
    )} />
  )
}

const mapStateToProps = (state) => ({
  loggedIn: getLoggedIn(state),
})


export default connect(mapStateToProps)(PrivateRoute)
import React from 'react'
import { connect } from 'react-redux'
import { getEmailName } from 'store/selectors/auth-selectors'
import { getLoggedIn } from 'store/selectors/auth-selectors'
import { appMenuToggle } from 'store/actions/app-menu-actions'
import AppBar from './AppBar'
import { nameFromEmail } from 'lib/nameFromEmail'


/* Dev */
// eslint-disable-next-line
import { green } from 'logger'

class EventDetailsContainer extends React.Component {

  render() {
    const { emailName, isLoggedIn } = this.props
    green('emailName', emailName)
    return (
      <AppBar
        emailName={nameFromEmail(emailName)}
        isLoggedIn={isLoggedIn}
      />
    )
  }
}

const mstp = (state, ownProps) => {
  return {
    emailName: getEmailName(state),
    isLoggedIn: getLoggedIn(state),
  }
}

const actions = { appMenuToggle }

export default connect(
  mstp,
  actions
)(EventDetailsContainer)

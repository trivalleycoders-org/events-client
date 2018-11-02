import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { getEmailName, getLoggedIn } from 'store/selectors/auth-selectors'
import { userLogoutRequest } from 'store/actions/auth-actions'
import { appMenuToggle } from 'store/actions/app-menu-actions'
import AppBar from './AppBar'
import { nameFromEmail } from 'lib/nameFromEmail'



/* Dev */
// eslint-disable-next-line
import { green, red } from 'logger'

class AppBarContainer extends React.Component {
  state = {
    redirect: false,
    redirectTo: '/',
  }

  handleMenuClick = (event, menu) => {

    let to = undefined

    green('handleMenuClick: menu', menu)

    if (menu === 'settings') {
      to = '/settings'
    } else if (menu === 'logout') {
      to = '/'
      this.props.userLogoutRequest()
    } else {
      red('AccountMenu.handleClose: unknown condition')
    }
    this.setState({
      redirectTo: to,
      redirect: true,
    })
  }

  render() {
    const { emailName, isLoggedIn, appMenuToggle } = this.props
    const { redirect, redirectTo } = this.state
    // green('emailName', emailName)
    green('isLoggedIn', isLoggedIn)
    green('redirect', redirect)
    green('redirectTo', redirectTo)
    if (redirect) {
      return <Redirect to={redirectTo} />
    }
    return (
      <AppBar
        emailName={nameFromEmail(emailName) || ''}
        isLoggedIn={isLoggedIn}
        appMenuToggle={appMenuToggle}
        handleMenuClick={this.handleMenuClick}
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

const actions = { appMenuToggle, userLogoutRequest }

export default connect(
  mstp,
  actions
)(AppBarContainer)

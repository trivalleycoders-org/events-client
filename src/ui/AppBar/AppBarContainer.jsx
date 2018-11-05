import React from 'react'
import { connect } from 'react-redux'
import { getEmailName, getLoggedIn } from 'store/selectors/auth-selectors'
import { userLogout } from 'store/actions/auth-actions'
import { appMenuToggle } from 'store/actions/app-menu-actions'
import AppBar from './AppBar'
import { nameFromEmail } from 'lib/nameFromEmail'

/* Dev */
// eslint-disable-next-line
import { green, red, purple } from 'logger'

class AppBarContainer extends React.Component {
  state = {
    redirect: false,
    redirectTo: '/',
  }

  // componentDidUpdate() {
    // purple('AppBarContainer - update')
    // const { isLoggedIn, history } = this.props
    // red('history', this.props)
    // const { redirect, redirectTo } = this.state
    // green('isLoggedIn', isLoggedIn)
    // green('redirect', redirect)
    // green('redirectTo', redirectTo)
    // if (redirect) {
    //   // return <Redirect to={redirectTo} />
    //   // red('history', this.props.history)
    //   history.push({ pathname: '/' })
    //   this.setState({ redirect: false })
    // }
  // }

  handleMenuClick = (event, menu) => {

    this.props.userLogout()

    // let to = undefined
    // // green('handleMenuClick: menu', menu)
    // // red('AppBarContainer.handleMenuClick: props.history', this.props.history)
    // if (menu === 'settings') {
    //   to = '/settings'
    // } else if (menu === 'logout') {
    //   to = '/'
    //   this.props.userLogoutRequest()
    // } else {
    //   red('AccountMenu.handleClose: unknown condition')
    // }
    // this.setState({
    //   redirectTo: to,
    //   redirect: true,
    // })
  }

  render() {
    const { emailName, isLoggedIn, appMenuToggle } = this.props

    // green('emailName', emailName)

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

const actions = { appMenuToggle, userLogout }

export default connect(
  mstp,
  actions
)(AppBarContainer)

import React from 'react'
import { compose } from 'recompose'
import { withRouter } from 'react-router-dom'
// import { Redirect } from 'react-router-dom'
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



  handleMenuClick = (event, menu) => {
    // green('handleMenuClick: menu', menu)
    if (menu === 'settings') {
      this.props.history.push('/settings')
      // this.setState({
      //   redirect: true,
      //   redirectTo: '/settings',
      // })
    } else if (menu === 'logout') {
      this.props.userLogout()
      this.props.history.push('/')
      // this.setState({
      //   redirect: true,
      //   redirectTo: '/',
      // })
    } else {
      red('AccountMenu.handleClose: unknown condition')
    }
  }

  render() {
    green('props', this.props)
    green('context', this.context)
    const { emailName, isLoggedIn, appMenuToggle } = this.props
    // const { redirect, redirectTo } = this.state
    // if (redirect) {
    //   if (redirectTo === '/settings') {
    //     green('redirect to /settings')
    //     return <Redirect to='/settings' />
    //   }
    //   if (redirectTo === '/') {
    //     return <Redirect to='/' />
    //   }
    // }
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


export default compose(
  withRouter,
  connect(mstp, actions)
)(AppBarContainer)

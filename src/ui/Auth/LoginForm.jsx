import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { reduxForm } from 'redux-form'
import { Button } from '@material-ui/core'
import { compose } from 'recompose'
import { withStyles } from '@material-ui/core/styles'
import TextFieldRedux from '../ui-elements/TextFieldRedux'
import styles from './styles'

// actions, selectors
import * as authActions from '../../store/actions/auth-actions'
import * as pageMessageActions from 'store/actions/page-message-actions'
import * as requestSelectors from 'store/selectors/request-selectors'
import { userLoginRequestKey } from 'store/actions/auth-actions'
import * as authSelectors from 'store/selectors/auth-selectors'

import validate from './validate'
// eslint-disable-next-line
import { green } from 'logger'
// import { request } from 'https'

class LoginForm extends React.PureComponent {

  constructor(props) {
    super(props)
    this.props.pageMessage('')
  }

  onSubmit = (values) => {
    const { userLoginRequest } = this.props
    userLoginRequest(values)
  }

  render() {

    const { classes, handleSubmit, pristine, reset, submitting, logInUserRequest, loggedIn } = this.props

    if (logInUserRequest.status === 'success' && loggedIn) {
      return (
        <Redirect to='/' />
      )
    } else {
      return (
        <div id='LoginForm' className={classes.pageWrapper}>
          <div className={classes.display1} >Login</div>
          <form>
            <TextFieldRedux
              fieldName='email'
              fieldLabel='Email'
              fullWidth
              required={true}
              error={true}
              enableEdit={true}
            />
            <TextFieldRedux
              fieldName='password'
              fieldLabel='Password'
              type='password'
              fullWidth
              required={true}
              error={true}
              enableEdit={true}
            />
            <Button type='button' onClick={handleSubmit(this.onSubmit)} disabled={pristine || submitting}>
              Submit
          </Button>
            <Button type='button' disabled={pristine || submitting} onClick={reset}>
              Clear Values
          </Button>
          </form>
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => ({
  ...state.auth,
  logInUserRequest: requestSelectors.getRequest(state, userLoginRequestKey),
  loggedIn: authSelectors.getLoggedIn(state),
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Object.assign({}, authActions, pageMessageActions), dispatch)
}

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form: 'LoginForm',
    validate,
    destroyOnUnmount: true
  })
)(LoginForm)

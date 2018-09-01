import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { reduxForm } from 'redux-form'
import { Button } from '@material-ui/core'
import { compose } from 'recompose'
import { withStyles } from '@material-ui/core/styles'

import TextFieldRedux from '../ui-elements/TextFieldRedux'
import styles from './styles'
import * as authActions from '../../store/actions/auth-actions'
import * as requestSelectors from 'store/selectors/request-selectors'
import { userLoginRequestKey } from 'store/actions/auth-actions'
import validate from './validate'
// import { request } from 'https'
import PageError from 'ui/ui-elements/PageError'

class LoginForm extends React.Component {

  // state = {
  //   goBack: this.props.history.goBack,
  // }

  onSubmit = (values) => {
    const { userLoginRequest } = this.props
    userLoginRequest(values)
  }

  render() {
    const { classes, handleSubmit, pristine, reset, submitting, logInUserRequest } = this.props
    // const { goBack } = this.state
    if (logInUserRequest.status === 'success') {
      return (
        <Redirect to='/events' />
      )
    } else {
      return (
        <div className={classes.pageWrapper}>
          <div className={classes.display1} >Login</div>
          <form>
            <TextFieldRedux
              fieldName='email'
              fieldLabel='Email'
              fullWidth
              required={true}
              error={true}
            />
            <TextFieldRedux
              fieldName='password'
              fieldLabel='Password'
              fullWidth
              required={true}
              error={true}
            />
            <Button type='button' onClick={handleSubmit(this.onSubmit)} disabled={pristine || submitting}>
              Submit
          </Button>
            <Button type='button' disabled={pristine || submitting} onClick={reset}>
              Clear Values
          </Button>
          </form>
          <PageError>
            {this.pageMessage}
          </PageError>
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => ({
  ...state.auth,
  logInUserRequest: requestSelectors.getRequest(state, userLoginRequestKey)
})

export default compose(
  withStyles(styles),
  connect(mapStateToProps, authActions),
  reduxForm({
    form: 'LoginForm',
    validate,
    destroyOnUnmount: true
  })
)(LoginForm)

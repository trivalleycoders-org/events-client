import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { reduxForm } from 'redux-form'
import { Button } from '@material-ui/core'
import { compose } from 'recompose'
import { withStyles } from '@material-ui/core/styles'

import TextFieldRedux from '../ui-elements/TextFieldRedux'
// import { User, validateModel } from '../../models'
import styles from './styles'
import * as authActions from '../../store/actions/auth-actions'
import * as requestSelectors from 'store/selectors/request-selectors'
import { userLoginRequestKey } from 'store/actions/auth-actions'

class LoginForm extends React.Component {

  state = {
    goBack: this.props.history.goBack,
  }
  // constructor() {
  //   super()
  //   this.changePassword = ev => {
  //     console.log('In change passwd: ', ev.target.value)
  //     this.props.passwordUpdate(ev.target.value)
  //   }
  // }

  onSubmit = (values) => {
    const { userLoginRequest } = this.props
    userLoginRequest(values)
    // this.state.goBack()
  }

  render() {

    const { classes, handleSubmit, pristine, reset, submitting, readRequestLogInUser } = this.props
    if (readRequestLogInUser.status === 'success') {
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
              // rows={2} one row should be enough
              error={true}
            />
            <TextFieldRedux
              fieldName='password'
              fieldLabel='Password'
              fullWidth
              required={true}
              // rows={2} one row should be enough
              error={true}
            />
            <Button
              type='button'
              onClick={handleSubmit(this.onSubmit)}
              disabled={pristine || submitting}
            >
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
  readRequestLogInUser: requestSelectors.getRequest(state, userLoginRequestKey)
})

export default compose(
  withStyles(styles),
  connect(mapStateToProps, authActions),
  reduxForm({
    form: 'LoginForm',
  })
)(LoginForm)

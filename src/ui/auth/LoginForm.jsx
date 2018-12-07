import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { reduxForm } from 'redux-form'
import { Button } from '@material-ui/core'
import { compose } from 'recompose'
import { withStyles } from '@material-ui/core/styles'
import PageMessage from 'ui/elements/PageMessage'
import TextFieldRedux from 'ui/elements/TextFieldRedux'
import styles from './styles'

// actions, selectors
import { pageMessage } from 'store/actions/page-message-actions'
import * as requestSelectors from 'store/selectors/request-selectors'
import { userLoginRequest, userLoginRequestKey } from 'store/actions/auth-actions'
import * as authSelectors from 'store/selectors/auth-selectors'
import validate from './validate'
import PageTitle from 'ui/elements/PageTitle'

class LoginForm extends React.PureComponent {

  constructor(props) {
    super(props)
    this.props.pageMessage('')
    this.state = {
      username: '',
      password: ''
    }
  }

  onSubmit = (values) => {
    const { userLoginRequest } = this.props
    userLoginRequest(values)
  }

  onCancel = () => {
    this.props.history.push('/')
  }

  handleEnterKey = (e, handleSubmit) => {
    if (e.keyCode === 13 || e.which === 13) {
      handleSubmit(this.onSubmit)()
    }
  }

  render() {

    const { classes, handleSubmit, pristine, submitting, logInUserRequest, loggedIn } = this.props

    if (logInUserRequest.status === 'success' && loggedIn) {
      return (
        <Redirect to='/' />
      )
    } else {
      return (
        <div id='LoginForm' className={classes.pageWrapper}>
          <PageTitle color='primary'>
            Login
          </PageTitle>
          <PageMessage />
          <form className={classes.form}>
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
              onKeyDown={(e) => { this.handleEnterKey(e, handleSubmit) }}
            />
            <div className={classes.actions}>
              <Button
                className={classes.submitButton}
                type='button'
                color='primary'
                variant='contained'
                onClick={handleSubmit(this.onSubmit)} disabled={pristine || submitting}
              >
                Login
              </Button>
              <Button
                className={classes.cancelButton}
                type='button'
                variant='contained'
                disabled={submitting}
                onClick={this.onCancel}
              >
                Cancel
              </Button>
            </div>
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

const actions = { userLoginRequest, pageMessage }

export default compose(
  withStyles(styles),
  connect(mapStateToProps, actions),
  reduxForm({
    form: 'LoginForm',
    validate,
    destroyOnUnmount: true
  })
)(LoginForm)


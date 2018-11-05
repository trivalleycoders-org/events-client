import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { reduxForm } from 'redux-form'
import { Button, Paper } from '@material-ui/core'
import { compose } from 'recompose'
import { withStyles } from '@material-ui/core/styles'
import TextFieldRedux from 'ui/elements/TextFieldRedux'
import styles from './styles'

// actions, selectors
import { pageMessage } from 'store/actions/page-message-actions'
import * as requestSelectors from 'store/selectors/request-selectors'
import { userLoginRequest, userLoginRequestKey } from 'store/actions/auth-actions'
import * as authSelectors from 'store/selectors/auth-selectors'
import validate from './validate'
import PageTitle from 'ui/elements/PageTitle'

// eslint-disable-next-line
import { green } from 'logger'

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
          <Paper
            className={classes.paper}
            elevation={0}
          >
            <PageTitle color='inherit'>
              Login
            </PageTitle>
          </Paper>
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
            />
            <div className={classes.actions}>
              <Button type='button' onClick={handleSubmit(this.onSubmit)} disabled={pristine || submitting}>
                Login
              </Button>
                <Button type='button' disabled={pristine || submitting} onClick={reset}>
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

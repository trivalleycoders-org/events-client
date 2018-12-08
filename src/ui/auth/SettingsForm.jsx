import React from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { Button, Typography } from '@material-ui/core'
import { compose } from 'recompose'
import { Redirect } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import TextFieldRedux from 'ui/elements/TextFieldRedux'
import styles from './styles'
import * as authActions from 'store/actions/auth-actions'
import * as requestSelectors from 'store/selectors/request-selectors'
import { userPasswordUpdateRequestKey } from 'store/actions/auth-actions'
import validate from './validate'
import PageTitle from 'ui/elements/PageTitle'

class SettingsForm extends React.Component {

  onClickLogout = () => {
    const { requestLogoutUser } = this.props
    requestLogoutUser()
  }

  onSubmit = (values) => {
    const { passwordUpdateRequest } = this.props
    passwordUpdateRequest(values)
  }

  handleEnterKey = (e, handleSubmit) => {
    if (e.keyCode === 13 || e.which === 13) {
      handleSubmit(this.onSubmit)()
    }
  }
  
  onCancel = () => {
    this.props.history.push('/')
  }

  render() {
    const { classes, handleSubmit, pristine, submitting, userPasswordUpdateStatus } = this.props
    if (userPasswordUpdateStatus.status === 'success') {
      return <Redirect to='/' />
    } else {
      return (
        <div id='SettingsForm' className={classes.pageWrapper}>
          <PageTitle color='primary'>
            Settings
          </PageTitle>
          <Typography variant='h6'>
            Enter your password
          </Typography>
          <form className={classes.form}>
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
                onClick={handleSubmit(this.onSubmit)}
                disabled={pristine || submitting}
              >
                Change Password
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
  userPasswordUpdateStatus: requestSelectors.getRequest(state, userPasswordUpdateRequestKey)
})

export default compose(
  withStyles(styles),
  connect(mapStateToProps, authActions),
  reduxForm({
    form: 'LoginForm',
    validate,
    destroyOnUnmount: true
  })
)(SettingsForm)

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

/* Dev */
// eslint-disable-next-line
import { green } from 'logger'

class SettingsForm extends React.Component {

  onClickLogout = () => {
    const { requestLogoutUser } = this.props
    requestLogoutUser()
  }

  onSubmit = (values) => {
    const { passwordUpdateRequest } = this.props
    passwordUpdateRequest(values)
  }

  render() {
    const { classes, handleSubmit, pristine, submitting, userPasswordUpdateStatus } = this.props
    if (userPasswordUpdateStatus.status === 'success') {
      return <Redirect to='/' />
    } else {
      return (
        <div id='SettingsForm' className={classes.pageWrapper}>
          <PageTitle>
            Settings
          </PageTitle>
          <Typography variant='h6'>
            Password
          </Typography>
          <form>
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
              Change Password
        </Button>
            <Button type='button' onClick={this.onClickLogout}>
              Logout
        </Button>
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

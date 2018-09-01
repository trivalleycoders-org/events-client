import React from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { Button } from '@material-ui/core'
import { compose } from 'recompose'
import { Redirect } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'

import TextFieldRedux from '../ui-elements/TextFieldRedux'
import styles from './styles'
import * as authActions from '../../store/actions/auth-actions'
import validate from './validate'

const mapStateToProps = (state) => ({ ...state.auth })


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
    const { classes, handleSubmit, pristine, submitting, redirectTo } = this.props
    if (redirectTo) {
      return (
        <Redirect to={redirectTo} />
      )
    } else {
      return (
        <div className={classes.pageWrapper}>
          <div className={classes.display1} >Change Password</div>
          <form>
            <TextFieldRedux
              fieldName='password'
              fieldLabel='Password'
              fullWidth
              required={true}
              error={true}
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

export default compose(
  withStyles(styles),
  connect(mapStateToProps, authActions),
  reduxForm({
    form: 'LoginForm',
    validate,
    destroyOnUnmount: true
  })
)(SettingsForm)

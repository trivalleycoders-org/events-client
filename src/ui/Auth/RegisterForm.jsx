import React from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { Redirect } from 'react-router-dom'
import { Button } from '@material-ui/core'
import { compose } from 'recompose'
import { withStyles } from '@material-ui/core/styles'

import TextFieldRedux from '../ui-elements/TextFieldRedux'
import styles from './styles'
import * as authActions from '../../store/actions/auth-actions'
import validate from './validate'
import PropTypes from 'prop-types'

const mapStateToProps = (state) => ({ ...state.auth })

class RegisterForm extends React.Component {

  onSubmit = (values) => {
    const { userRegisterRequest } = this.props
    userRegisterRequest(values)
  }

  render() {

    const { classes, handleSubmit, pristine, reset, submitting, redirectTo } = this.props
    if (redirectTo) {
      return (
        <Redirect to={redirectTo} />
      )
    } else {
      return (
        <div className={classes.pageWrapper}>
          <div className={classes.display1} >Register Form</div>
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
        </div>
      )
    }
  }
}

export default compose(
  withStyles(styles),
  connect(mapStateToProps, authActions),
  reduxForm({
    form: 'RegisterForm',
    validate,
    destroyOnUnmount: true
  })
)(RegisterForm)

RegisterForm.propTypes = {
  classes: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  reset: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
}

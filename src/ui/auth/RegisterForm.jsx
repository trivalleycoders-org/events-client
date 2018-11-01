import React from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { Redirect } from 'react-router-dom'
import { Button, Paper } from '@material-ui/core'
import { compose } from 'recompose'
import { withStyles } from '@material-ui/core/styles'
// actions, selectors
import { userRegisterRequestKey } from 'store/actions/auth-actions'
import * as requestSelectors from 'store/selectors/request-selectors'
import * as authActions from 'store/actions/auth-actions'

import TextFieldRedux from 'ui/elements/TextFieldRedux'
import styles from './styles'
import validate from './validate'
import PropTypes from 'prop-types'
import PageTitle from 'ui/elements/PageTitle'

/* Dev */
// eslint-disable-next-line
import { green } from 'logger'

class RegisterForm extends React.Component {

  state = {
    justMounted: true,
  }

  onSubmit = (values) => {
    const { userRegisterRequest } = this.props
    this.setState({ justMounted: false })
    userRegisterRequest(values)
  }

  render() {
    const { classes, handleSubmit, pristine, reset, submitting, userRegisterRequestStatus } = this.props
    const { justMounted } = this.state
    const { status } = userRegisterRequestStatus

    if (status === 'success' && !justMounted) {
      return (
        <Redirect to='/login' />
      )
    } else {
      return (
        <div id='RegisterForm' className={classes.pageWrapper}>
        <Paper
            className={classes.paper}
            elevation={0}
          >
            <PageTitle color='inherit'>
              Register
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
                    Register
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
  userRegisterRequestStatus: requestSelectors.getRequest(state, userRegisterRequestKey ),
})

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
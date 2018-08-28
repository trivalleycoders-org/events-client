import React from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { Button } from '@material-ui/core'
import { compose } from 'recompose'
import { withStyles } from '@material-ui/core/styles'

import TextFieldRedux from '../ui-elements/TextFieldRedux'
import styles from './styles'
import * as authActions from '../../store/actions/auth-actions'

const mapStateToProps = (state) => ({ ...state.auth })

class LoginForm extends React.Component {

  state = {
    goBack: this.props.history.goBack,
  }
  // constructor() {
  //   super()
  //   this.changePassword = ev => {
  //     console.log('In change passwd: ', ev.target.value)
  //     this.props.updatePassword(ev.target.value)
  //   }
  // }

  onSubmit = (values) => {
    // console.log('values: ', values)
    const { requestLoginUser } = this.props
    requestLoginUser(values)
    this.state.goBack()
  }

  render() {

    const { classes, handleSubmit, pristine, reset, submitting } = this.props

    return (
      <div className={classes.pageWrapper}>
        <div className={classes.display1} >Login</div>
        <form>
          <TextFieldRedux
            fieldName='email'
            fieldLabel='Email'
            fullWidth
            required={true}
            rows={2}
            error={true}
          />
          <TextFieldRedux
            fieldName='password'
            fieldLabel='Password'
            fullWidth
            required={true}
            rows={2}
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

export default compose(
  withStyles(styles),
  connect(mapStateToProps, authActions),
  reduxForm({
    form: 'LoginForm',
  })
)(LoginForm)

import React from 'react'
import { compose } from 'recompose'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import {
  Button,
} from '@material-ui/core'

/* User */
import styles from './styles'

/* Dev */
// import ShowValues from 'ui/ui-elements/ShowValues'
import { green } from 'logger'

class NewEvent extends React.Component {
  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <Field
            name="title"
            component="input"
            type="text"
            placeholder="Title"
          />
        </div>
        <div>
          <button type="submit" disabled={pristine || submitting}>Submit</button>
        </div>
      </form>
    )
  }
}

const data = {
  title: 'InitEventTitle',
}

const mapStateToProps = (state) => {
  const o = {
    initialValues: data
  }
  green('o', o)
  return o
}



export default compose(
  withStyles(styles),
  connect(mapStateToProps),
  reduxForm({
    form: 'NewEventTest',
  }),
)(NewEvent)

  // connect(mapStateToProps, eventActions)
  // validate,
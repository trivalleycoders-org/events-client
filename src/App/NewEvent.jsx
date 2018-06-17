import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Field, reduxForm } from 'redux-form'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { compose } from 'recompose'

const styles = {}

const NewEvent = ({
                    handleSubmit,
                    pristine,
                    reset,
                    submitting,
                    values
                  }) => {

  const onSubmit = (values) => {
    console.log('handleSubmit')
    console.log('values', values)

  }
  const renderTextField = ({
                             input,
                             label,
                             meta: { touched, error },
                             ...custom
                           },) => (
    <TextField
      placeholder={label}
      {...input}
      {...custom}
    />
  )


  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Field
            name="date"
            component={renderTextField}
            label="Event date"
          />
        </div>
        <div>
          <Field
            name="title"
            component={renderTextField}
            label="Event title"
          />
        </div>
        <div>
          <Field
            name="venu"
            component={renderTextField}
            label="Venu"
          />
        </div>
        <div>
          <Button type="submit" disabled={pristine || submitting}>
            Submit
          </Button>
          <Button type="button" disabled={pristine || submitting} onClick={reset}>
            Clear Values
          </Button>
        </div>
      </form>
    </div>
  )
}

export default compose(withStyles(styles), reduxForm({ form: 'newEvent' }))(NewEvent)

import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import * as eventActions from 'store/actions/event-actions'

import { compose } from 'recompose'

const styles = {}

const NewEvent = ({
                    handleSubmit,
                    pristine,
                    reset,
                    requestCreateEvent,
                    submitting,
                    values
                  }) => {

  const onSubmit = (values) => {
    // console.log('handleSubmit')
    // console.log('values', values)
    requestCreateEvent({
      time: values.time,
      title: values.title,
      venu: values.venu,
    })

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
            name='time'
            component={renderTextField}
            label='Event date'
          />
        </div>
        <div>
          <Field
            name='title'
            component={renderTextField}
            label='Event title'
          />
        </div>
        <div>
          <Field
            name='venu'
            component={renderTextField}
            label='Venu'
          />
        </div>
        <div>
          <Field
            name='price'
            component={renderTextField}
            label='Price'
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

const mapStateToProps = (state) => {
  return { }
}

export default compose(
  withStyles(styles),
  reduxForm({ form: 'newEvent' }),
  connect(mapStateToProps, eventActions)
)(NewEvent)

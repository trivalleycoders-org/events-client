import React from 'react'
import { DateTimePicker } from 'material-ui-pickers'
import { Field } from 'redux-form'
import { green } from 'logger'

const xdateTimePicker = (
  {
    input,
    meta: { touched, error, form },
    showErrorsInline,
    timezone,
    dispatch,
    ...custom
  }
) => {
  green('value', input.value)
  green('name', input.name)
  
  return (
    <DateTimePicker
      name={input.name}
      error={touched && Boolean(error)}
      helperText={touched && error}
      // value={value}
      // onChange={onChange}
      format='MMM, DD YYYY    hh:mm A'
      {...input}
      {...custom}
    />
  )
}

const DateTimeField = ({ name }) => {
  console.log('********************************************8')
  return (
    <Field
      component={xdateTimePicker}
      name={name}
    />
  )
}

export default DateTimeField

import React from 'react'
import { DateTimePicker } from 'material-ui-pickers'
import { Field } from 'redux-form'
import { MuiPickersUtilsProvider } from 'material-ui-pickers'
import DateFnsUtils from 'material-ui-pickers/utils/date-fns-utils'
import { green } from 'logger'

const dateTimePicker = (
  {
    input,
    meta: { touched, error, form },
    showErrorsInline,
    timezone,
    dispatch,
    ...custom
  }
) => {
  green('input.value', input.value)
  const value = input.value.length === 0
    ? new Date()
    : input.value
  green('final value: typof', typeof value)
  green('final value', value)

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DateTimePicker
        name={input.name}
        error={touched && Boolean(error)}
        helperText={touched && error}
        value={value}
        
        // onChange={onChange}
        format='MMM, DD YYYY    hh:mm A'
        {...input}
        {...custom}
      />
    </MuiPickersUtilsProvider>
  )
}

const DateTimeField = ({ fieldLabel, fieldName }) => {
  console.log('********************************************8')
  return (
    <Field
      component={dateTimePicker}
      name={fieldName}
      label={fieldLabel}
    />
  )
}

export default DateTimeField

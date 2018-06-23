import React from 'react'
import { DateTimePicker } from 'material-ui-pickers'

export const DateTimePickerRow = ({
  timezone,
  showErrorsInline,
  input: { onChange, value, name },
  meta: { touched, error, form },
  dispatch,
  ...other
}) => {
  return (
    <DateTimePicker
      name={name}
      error={touched && Boolean(error)}
      helperText={touched && error}
      value={value}
      onChange={onChange}
      format='DD/MM/YYYY'
      {...other}
    />
  )
}
export default DateTimePickerRow

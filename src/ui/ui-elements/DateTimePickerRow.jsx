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
      value={value || new Date()}
      onChange={onChange}
      format='MMM, DD YYYY    hh:mm A'
      {...other}
    />
  )
}
export default DateTimePickerRow

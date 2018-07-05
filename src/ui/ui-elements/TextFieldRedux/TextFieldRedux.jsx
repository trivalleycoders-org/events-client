import React from 'react'
import { Field } from 'redux-form'
import { TextField } from '@material-ui/core'
// import { green } from 'logger'

/*
    error: in redux-form, error is a text field. In mui it is a boolean
*/
const renderTextField = (
  { input, label, meta, ...custom },
) => {
  const { error, touched } = meta
  const { disabled, ...customRest } = custom
  // green('input', input)
  // green('custom', custom)
  const hasErrorSet = typeof error === 'undefined' ? false : true
  const isError = hasErrorSet && touched

  return (
    <TextField
      disabled={disabled}
      error={isError}
      helperText={touched && error}
      label={label}
      placeholder={label}

      {...input}
      {...customRest}
    />
  )
}

const TextFieldRedux = props => {
  const { fieldName, fieldLabel, disabled, required, rows=0 } = props
  // if (fieldName === 'price') {
  //   green('TextFieldRedux: disabled', disabled)
  // }
  const multilineField = rows > 1
  return multilineField
    ? <Field 
        component={renderTextField}
        disabled={disabled}
        label={fieldLabel}
        multiline={rows > 1}
        name={fieldName} 
        required={required}
        rows={rows}
      />
    : <Field 
        component={renderTextField}
        disabled={disabled}
        label={fieldLabel}
        name={fieldName} 
        required={required}
      />
}

export default TextFieldRedux
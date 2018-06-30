import React from 'react'
import { Field } from 'redux-form'
import { TextField } from '@material-ui/core'
import { green } from 'logger'

/*
    error: in redux-form, error is a text field. In mui it is a boolean
*/
const renderTextField = (
  { input, label, meta: { error, touched, warning }, ...custom },
) => {

  const hasErrorSet = typeof error === 'undefined' ? false : true
  const isError = hasErrorSet && touched
  return (
    <TextField
      placeholder={label}
      label={label}
      helperText={touched && error}
      error={isError}
      {...input}
      {...custom}
    />
  )
}

const TextFieldRedux = props => {
  const { fieldName, fieldLabel, required, rows=0 } = props
  const multilineField = rows > 1
  return multilineField
    ? <Field 
        name={fieldName} 
        component={renderTextField}
        label={fieldLabel}
        multiline={rows > 1}
        required={required}
        rows={rows}
      />
    : <Field 
        name={fieldName} 
        component={renderTextField}
        label={fieldLabel}
        required={required}
      />
}

export default TextFieldRedux
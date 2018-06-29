import React from 'react'
import { Field } from 'redux-form'
import { TextField } from '@material-ui/core'

const renderTextField = (
  { input, label, meta: { touched, error }, ...custom },
) => (
  <TextField
    placeholder={label}
    label={label}
    error={touched && error}
    {...input}
    {...custom}
  />
)

const TextFieldRedux = props => {
  const { fieldName, fieldLabel, rows=0 } = props
  const multilineField = rows > 1
  return multilineField
    ? <Field 
        name={fieldName} 
        component={renderTextField}
        label={fieldLabel}
        multiline={rows > 1}
        rows={rows}
      />
    : <Field 
        name={fieldName} 
        component={renderTextField}
        label={fieldLabel}
      />
}

export default TextFieldRedux
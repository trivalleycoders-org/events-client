import React from 'react'
import { Field } from 'redux-form'
import { TextField } from '@material-ui/core'
import FormControl from '@material-ui/core/FormControl'

/* Dev */
// import { green } from 'logger'

/*
    error: in redux-form, error is a text field. In mui it is a boolean
*/
const renderTextField = (
  { input, label, meta, ...custom },
) => {
  const { error, touched } = meta
  const { disabled, ...customRest } = custom
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
  const { fieldName, fieldLabel, disabled, required, fullWidth=false, rows=0 } = props
  const multilineField = rows > 1

  return (
    <FormControl fullWidth={fullWidth}>
      {
        multilineField
          ? <Field 
              component={renderTextField}
              disabled={disabled}
              fullWidth={fullWidth}
              label={fieldLabel}
              multiline={rows > 1}
              name={fieldName} 
              required={required}
              rows={rows}
            />
          : <Field 
              component={renderTextField}
              disabled={disabled}
              fullWidth
              label={fieldLabel}
              name={fieldName} 
              required={required}
            />
      }
    </FormControl>
  )
}

export default TextFieldRedux
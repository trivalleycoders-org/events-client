import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import { TextField } from '@material-ui/core'
import FormControl from '@material-ui/core/FormControl'


/* Dev */
// eslint-disable-next-line
import { green } from 'logger'

/*
    error: in redux-form, error is a text field. In mui it is a boolean
*/
const renderTextField = (props) => {
  // green('TextFieldRedux.renderTextField: props', props)
  // green('** rows', props.meta.rows)
  const { input, label, meta, ...custom } = props
  const { error, touched } = meta
  const { disabled, rows, ...customRest } = custom
  const hasErrorSet = typeof error === 'undefined' ? false : true
  const isError = hasErrorSet && touched

  return (
    <TextField
      disabled={disabled}
      error={isError}
      helperText={touched && error}
      label={label}
      placeholder={label}
      rows={rows}
      {...input}
      {...customRest}
    />
  )
}

const TextFieldRedux = props => {
  const { fieldName, fieldLabel, disabled, required, fullWidth=false, rows=0 } = props
  const multilineField = rows > 1
  // green('TextFieldRedux', multilineField)

  return (

    <FormControl fullWidth={fullWidth}>
      <Field 
        component={renderTextField}
        disabled={disabled}
        fullWidth={fullWidth}
        label={fieldLabel}
        multiline={multilineField}
        name={fieldName} 
        required={required}
        rows={rows}
      />
    </FormControl>
  )
}

export default TextFieldRedux

TextFieldRedux.propTypes = {
  fieldName: PropTypes.string.isRequired,
  fieldLabel: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  fullWidth: PropTypes.bool,
  rows: PropTypes.number,
}

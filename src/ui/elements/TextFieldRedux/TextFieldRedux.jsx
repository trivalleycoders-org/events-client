import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText
} from '@material-ui/core'

/* Dev */
// eslint-disable-next-line
import { green, red } from 'logger'
class TextFieldRedux extends React.Component {
  state = {
    isError: false
  }

  component = (props) => {
    /*
      error: in redux-form, error is a string. In mui it is a boolean
    */
    const {
      disabled,
      input,
      label,
      meta,
      fullWidth,
      multiline,
      required,
      rows,
      type,
      enableEdit,
      ...rest
    } = props
    const { error } = meta
    const isError = error ? true : false

    const { name, onChange, onBlur, ...inputRest } = input
    const handleOnBlur = (e) => {
      if (required) {
        const len = e.target.value.length
        this.setState({
          isError: len === 0  // && touched
        })
      }
    }

      if (enableEdit) {
        return (
          <FormControl
          fullWidth={fullWidth}
          >
            <InputLabel htmlFor={name}>{label}</InputLabel>
            <Input
              onBlur={(e) => handleOnBlur(e)}
              id={name}
              onChange={onChange}
              fullWidth={fullWidth}
              disabled={disabled}
              error={this.state.isError}
              multiline={multiline}
              rows={rows}
              type={type}
              {...rest}
              {...inputRest}
            />
            <FormHelperText error={isError}>{error}</FormHelperText>
          </FormControl>
        )
      } else {
        return (
          <div>
            <label>{label}: </label><label>{input.value}</label>
          </div>
        )
      }


  }
  render() {
    const { fieldName, fieldLabel, disabled, enableEdit=false, fullWidth = false, required, rows = 0, type } = this.props
    return (
      <Field
        component={this.component}
        disabled={disabled}
        fullWidth={fullWidth}
        label={fieldLabel}
        multiline={rows > 1}
        name={fieldName}
        required={required}
        rows={rows}
        type={type}
        props={{
          enableEdit: enableEdit,
        }}
      />
    )
  }
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

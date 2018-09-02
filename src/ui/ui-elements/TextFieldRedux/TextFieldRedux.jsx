import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import { FormControl, InputLabel, Input, FormHelperText } from '@material-ui/core'

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
      ...rest,
    } = props
    const { error } = meta
    const isError = error ? true : false

    const { name, onChange, onBlur, ...inputRest } = input
    const handleOnBlur = (e) => {
      // green('handleBlur')
      if (required) {
        const len = e.target.value.length
        // green('handleBlur: len', `${len}(${typeof len})`)
        this.setState({
          isError: len === 0  // && touched
        })
      }
    }
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
          {...rest}
          {...inputRest}
        />
        <FormHelperText error={isError}>{error}</FormHelperText>
      </FormControl>
    )
  }
  render() {
    const { fieldName, fieldLabel, disabled, required, fullWidth = false, rows = 0 } = this.props
    // green(`state for ${fieldName}`, this.state)
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

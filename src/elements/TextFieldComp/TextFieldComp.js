import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core'
import { green } from 'logger'

class TextFieldComp extends Component {
  state = {
    required: false,
    error: false,
  }
  render() {
    const { className, label, name, onChange, required, error, validate, value } = this.props
    green('props', this.props)
    return (
      <TextField
        className={className}
        label={label}
        name={name}
        onChange={(e) => onChange(e)}
        required={required}
        error={validate}
        type='text'
        value={value}
      />
    )
  }
}

export default TextFieldComp

TextFieldComp.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  // required: PrpsTypes.bool,
  // error: PropTypes.book,
}

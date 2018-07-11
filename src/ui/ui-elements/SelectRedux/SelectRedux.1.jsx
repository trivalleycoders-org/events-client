import React from 'react'
import { Field } from 'redux-form'
import { Select } from '@material-ui/core'
import { prepend } from 'ramda'
import {
  Button,
  MenuItem,
  Typography,
  FormControl
} from '@material-ui/core'

/* Dev */
import { green } from 'logger'

const renderSelect = (
  { input, label, meta: { touched, error }, children, ...custom },
) => (
  <Select
    label={label}
    // error={touched && error}
    {...input}
    onChange={(event, index, value) => input.onChange(value)}
    children={children}
    {...custom}
  />
)


class SelectRedux extends React.Component {
  state = {
    currentValue: ''
  }
  onValueChange = (value) => {
    this.setState({ currentValue: value })
  }
  render() {
    const { children, fieldName, fieldLabel } = this.props
    const { currentValue } = this.state
    green('currentValue', currentValue)
    
    return (
      <Field
        component={renderSelect}
        label={fieldLabel}
        fullWidth
        // onValueChange={this.onValueChange}
        name={fieldName}
      >
        <MenuItem value='' disabled>Placeholder</MenuItem>
        <MenuItem value='quadcopter'>Quadcopter</MenuItem>
      </Field>
    )
  }
  
}

export default SelectRedux
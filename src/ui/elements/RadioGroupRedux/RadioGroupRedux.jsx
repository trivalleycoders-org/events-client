import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import { RadioGroup, FormControl, FormLabel } from '@material-ui/core'

const renderRadioGroup = ({ input, ...rest }) => {
  return (
    <RadioGroup
      {...input}
      {...rest}
      value={input.value}
      onChange={(event, value) => input.onChange(value)}
    />
  )
}

const RadioGroupRedux = props => {
  const { formLabel, fieldName, children } = props
  return (
    <div>
      <FormControl component='fieldset' required>
        <FormLabel component='legend'>{formLabel}</FormLabel>
      </FormControl>
      <Field name={fieldName} component={renderRadioGroup}>
        {children}
      </Field>
    </div>

  )
}

export default RadioGroupRedux

RadioGroupRedux.propTypes = {
  formLabel: PropTypes.string.isRequired,
  fieldName: PropTypes.string.isRequired,
  children:  PropTypes.array.isRequired,
}

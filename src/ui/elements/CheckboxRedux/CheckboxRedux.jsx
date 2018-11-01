import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import {
  Checkbox,
  FormControlLabel,
} from '@material-ui/core'

const renderCheckbox = ({ input }) => (
  <Checkbox
    checked={input.value ? true : false}
    onChange={input.onChange}
  />
)

const CheckboxRedux = props => {
  const { fieldName, fieldLabel, onChange } = props
  return (
    <FormControlLabel
      control={
        <Field 
          name={fieldName}
          component={renderCheckbox} 
          onChange={onChange}
        />
      }
      label={fieldLabel}
    />
  )
}

export default CheckboxRedux

CheckboxRedux.propTypes = {
  fieldName: PropTypes.string.isRequired,
  fieldLabel: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}
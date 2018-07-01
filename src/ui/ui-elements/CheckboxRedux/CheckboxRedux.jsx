import React from 'react'
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
  const { fieldName, fieldLabel } = props
  return (
    <FormControlLabel
      control={
        <Field 
        name={fieldName}
        component={renderCheckbox} 
        />
      }
      label={fieldLabel}
    />
  )
}

export default CheckboxRedux
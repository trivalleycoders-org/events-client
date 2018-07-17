import React from 'react'
import PropTypes from 'prop-types'
import UploadComponent from './UploadComponent'
import { Field } from 'redux-form'
// import { green } from 'logger'

class UploadImage extends React.Component {
  
  picker = (props) => {
    const { onChange, ...rest } = props.input
    return (
      <UploadComponent
        {...rest}
        onChange={onChange}
        initial={props.meta.initial}
      />
    )
  }
  render() {
    const { fieldLabel, fieldName } = this.props
    return (
      <Field
        component={this.picker}
        name={fieldName}
        label={fieldLabel}
      />
    )
  }
}

export default UploadImage

UploadImage.propTypes = {
  fieldLabel: PropTypes.string.isRequired,
  fieldName: PropTypes.string.isRequired,
}
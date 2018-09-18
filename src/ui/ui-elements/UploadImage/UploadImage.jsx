import React from 'react'
import PropTypes from 'prop-types'
import Component from './Component'
import { Field } from 'redux-form'
// eslint-disable-next-line
import { green } from 'logger'

class UploadImage extends React.Component {

  picker = (props) => {
    green('picker props', props)
    const { onChange, ...rest } = props.input
    const { initial } = props.meta
    const { enableEdit } = props
    green('rest', rest)
    return (
      <Component
        {...rest}
        onChange={onChange}
        initial={initial}
        enableEdit={enableEdit}
      />
    )
  }
  render() {
    const { fieldLabel, fieldName, enableEdit } = this.props
    green('enableEdit', enableEdit)
    return (
      <Field
        component={this.picker}
        name={fieldName}
        label={fieldLabel}
        props={{
          enableEdit: enableEdit
        }}
      />
    )
  }
}

export default UploadImage

UploadImage.propTypes = {
  fieldLabel: PropTypes.string.isRequired,
  fieldName: PropTypes.string.isRequired,
}
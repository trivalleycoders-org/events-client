import React from 'react'
import PropTypes from 'prop-types'
import Component from './Component'
import { Field } from 'redux-form'
// eslint-disable-next-line
import { green } from 'logger'

class UploadImage extends React.Component {

  picker = (props) => {
    const { enableEdit } = props

    const { onChange } = props.input
    const { initial } = props.meta
    return (

      <Component
        onChange={onChange}
        initial={initial}
        enableEdit={enableEdit}
      />


    )
  }
  render() {
    const { fieldLabel, fieldName, enableEdit } = this.props
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
/* <div style={{padding: 20, backgroundColor: 'green'}}>Hello</div> */

export default UploadImage

UploadImage.propTypes = {
  fieldLabel: PropTypes.string.isRequired,
  fieldName: PropTypes.string.isRequired,
}
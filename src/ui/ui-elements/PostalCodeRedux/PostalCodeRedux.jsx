import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import PostalCodeComponent from './PostalCodeComponent'
/* Dev */
// eslint-disable-next-line
import { green, blue } from 'logger'

class PostalCodeRedux extends React.Component {
  picker = (props) => {
    // green('PostalCodeRedux: props', props)
    const { onChange, ...rest } = props.input
    return (
      <PostalCodeComponent
        onChange={onChange}
        { ...rest }
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

export default PostalCodeRedux
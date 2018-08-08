import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import ChipsComponent from './ChipsComponent'

/* Dev */
// eslint-disable-next-line
import { green } from 'logger'

class ChipRedux extends React.Component {

  picker = (props) => {
    const { onChange, ...rest } = props.input 
    const { initial } = props.meta
    const { label } = props
    return (
      <ChipsComponent
        {...rest}
        onChange={onChange}
        initial={initial}
        label={label}
      />
    )
  }

  render () {
    const { fieldName, fieldLabel } = this.props
    return (
      <Field
        component={this.picker}
        name={fieldName}
        label={fieldLabel}
      />
    )
  }  
}

ChipRedux.propTypes = {
  addOnBlur: PropTypes.bool,
  fieldName: PropTypes.string.isRequired,
  fieldLabel: PropTypes.string,
}

export default ChipRedux

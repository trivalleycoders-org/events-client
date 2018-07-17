import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import Chips from './Chips'

/* Dev */
import { green } from 'logger'

class ChipRedux extends React.Component {

  picker = (props) => {
    const { onChange, ...rest } = props.input 
    const { initial } = props.meta
    const { label } = props
    green('ChipsRedux.picker: props', props)
    return (
      <Chips
        {...rest}
        onChange={onChange}
        initial={initial}
        label={label}
      />
    )
  }

  render () {
    const { fieldName, fieldLabel } = this.props
    green('ChipsRedux: props', this.props)
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

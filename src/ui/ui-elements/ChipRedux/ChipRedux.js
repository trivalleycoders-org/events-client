import React from 'react'
import PropTypes from 'prop-types'
import ChipInput from 'material-ui-chip-input'
import { Field } from 'redux-form'
import Chips from './Chips'

/* Dev */
import { green } from 'logger'


class ChipRedux extends React.Component {

  picker = (props) => {
    const { onChange, ...rest } = props.input 
    return (
      <Chips
        {...rest}
        onChange={onChange}

      />
    )
  }

  render () {
    const { fieldName } = this.props
    return (
      <Field
        component={this.picker}
        name={fieldName}
      />
    )

    
  }  
}

ChipRedux.propTypes = {
  addOnBlur: PropTypes.bool
}

export default ChipRedux
import React from 'react'
import Combined from './Combined'
import { Field } from 'redux-form'
import { green } from 'logger'

class StartEndDateRedux extends React.Component {

  picker = (props) => {
    const { onChange, ...rest } = props.input
    return (
      <Combined
        {...rest}
        onChange={onChange}
        format='MMM DD YYYY hh:mm A'
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

export default StartEndDateRedux

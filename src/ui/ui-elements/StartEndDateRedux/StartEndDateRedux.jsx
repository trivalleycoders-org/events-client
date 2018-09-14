import React from 'react'
import PropTypes from 'prop-types'
import Combined from './Combined'
import { Field } from 'redux-form'
/* Dev */
// eslint-disable-next-line
import { green } from 'logger'

class StartEndDateRedux extends React.Component {

  picker = (props) => {
    green('date props', props)
    const { onChange, ...rest } = props.input
    return (
      <Combined
        {...rest}
        onChange={onChange}
        format={props.dateFormat}
        fullWidth
        initial={props.meta.initial}
        // required={true}
      />
    )
  }
  // format='MMM do YYYY hh:mm a'
  render() {
    const { fieldLabel, fieldName, dateFormat='MMM do YYYY hh:mm a' } = this.props

    return (
      <Field
        component={this.picker}
        fullWidth
        name={fieldName}
        label={fieldLabel}
        dateFormat={dateFormat}
        // required={true}

        // validate={() => console.log('validate')}
      />
    )
  }
}

export default StartEndDateRedux

StartEndDateRedux.propTypes = {
  fieldLabel: PropTypes.string.isRequired,
  fieldName: PropTypes.string.isRequired,
}

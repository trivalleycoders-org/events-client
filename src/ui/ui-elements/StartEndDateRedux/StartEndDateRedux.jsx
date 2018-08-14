import React from 'react'
import PropTypes from 'prop-types'
import Combined from './Combined'
import { Field } from 'redux-form'
/* Dev */
// eslint-disable-next-line
import { green } from '../../../logger/index'
// import { green } from 'logger'

class StartEndDateRedux extends React.Component {

  picker = (props) => {
    const { onChange, ...rest } = props.input
    return (
      <Combined
        {...rest}
        onChange={onChange}
        format='MMM DD YYYY hh:mm A'
        fullWidth
        initial={props.meta.initial}
        // required={true}
      />
    )
  }
  render() {
    const { fieldLabel, fieldName } = this.props

    return (
      <Field
        component={this.picker}
        fullWidth
        name={fieldName}
        label={fieldLabel}
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

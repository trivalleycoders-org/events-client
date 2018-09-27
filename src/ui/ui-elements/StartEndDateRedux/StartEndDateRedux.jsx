import React from 'react'
import PropTypes from 'prop-types'
import Combined from './Combined'
import { Field } from 'redux-form'
/* Dev */
// eslint-disable-next-line
import { green } from 'logger'
import { hasProp } from 'lib/hasProp'

class StartEndDateRedux extends React.Component {

  picker = (props) => {
    const { onChange, ...rest } = props.input
    const { enableEdit } = props
    const initial = props.meta.initial
    const startDate = hasProp('startDate', initial) ? initial.startDate : undefined
    const endDate = hasProp('endDate', initial) ? initial.endDate : undefined

    if (enableEdit) {
      return (
        <Combined
          {...rest}
          onChange={onChange}
          format={props.dateFormat}
          fullWidth
          initial={props.meta.initial}
        />
      )
    } else {

      return (
        <div>
          <label>Start date: </label><label>{startDate}</label><br/>
          <label>End date: </label><label>{endDate}</label>
        </div>
      )
    }

  }
  render() {
    const { fieldLabel, fieldName, fullWidth=true, dateFormat='MMM do YYYY hh:mm a', enableEdit=false } = this.props

    return (
      <Field
        component={this.picker}
        name={fieldName}
        label={fieldLabel}
        props={{
          dateFormat: dateFormat,
          fullWidth,
          enableEdit,
        }}
      />
    )
  }
}

export default StartEndDateRedux

StartEndDateRedux.propTypes = {
  fieldLabel: PropTypes.string.isRequired,
  fieldName: PropTypes.string.isRequired,
}

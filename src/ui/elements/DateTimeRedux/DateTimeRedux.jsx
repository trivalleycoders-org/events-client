import React from 'react'
import PropTypes from 'prop-types'
import { DateTimePicker } from 'material-ui-pickers'
import { Field } from 'redux-form'
import { green } from 'logger'
import { has } from 'ramda'

class DateTimeField extends React.Component {
  state = {
    currentDateTime: new Date()
  }

  dateTimePicker = (props) => {
    const { input, meta, ...rest} = props
    const { touched, error, warning } = meta
    const { onChange } = input
    const { currentDateTime } = this.state  
    return (
      <div>
        <DateTimePicker
          {...rest}
          onChange={onChange}
          value={currentDateTime}
          format='MMM DD YYYY hh:mm A'
        />
      </div>
    )
  }

  handleDateChange = (event, date) => {
    this.setState({
      currentDateTime: date,
    })
    const hasField = has('onFieldChange')
    if (hasField(this.props)) {
      this.props.onFieldChange(date)
    }
  }
  
  render() {
    const { disablePast, fieldLabel, fieldName, minDate, required } = this.props
    return (
      <Field
        component={this.dateTimePicker}
        disablePast={disablePast}
        name={fieldName}
        label={fieldLabel}
        onChange={(event, date) => this.handleDateChange(event, date)}
        required={required}
        minDate={minDate}
      />
    )
  }
  
}

export default DateTimeField

DateTimeField.propTypes = {
  disablePast: PropTypes.bool,
  fieldLabel: PropTypes.string,
  fieldName: PropTypes.string.isRequired,
  minDate: PropTypes.date.isRequired,
  required: PropTypes.bool
}
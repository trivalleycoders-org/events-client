import React from 'react'
import { DateTimePicker } from 'material-ui-pickers'
import { Field } from 'redux-form'
import { green } from 'logger'

class DateTimeField extends React.Component {
  state = {
    currentDateTime: new Date()
  }

  dateTimePicker = (props) => {
    const { onChange, ...rest } = props.input
    const { currentDateTime } = this.state  
    return (
      <DateTimePicker
        {...rest}
        onChange={onChange}
        value={currentDateTime}
        format='MMM DD YYYY hh:mm A'
      />
    )
  }

  handleDateChange = (event, date) => {
    green('handleDateChange: date', date)
    this.setState({
      currentDateTime: date,
    })
  }
  
  render() {
    const { fieldLabel, fieldName } = this.props
    
    return (
      <Field
        component={this.dateTimePicker}
        name={fieldName}
        label={fieldLabel}
        onChange={(event, date) => this.handleDateChange(event, date)}
      />
    )
  }
  
}

export default DateTimeField

import React from 'react'
import { DateTimePicker } from 'material-ui-pickers'
import { Field } from 'redux-form'
import { green } from 'logger'

class DateTimeField extends React.Component {
  state = {
    currentDateTime: new Date()
  }

  dateTimePicker = (props) => {
    // green('props', props)
    const { input, meta, ...rest} = props
    const { touched, error, warning } = meta
    const { onChange } = input
    const { currentDateTime } = this.state  
    // green('input', props.input)
    // green('rest', rest)
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
    green('handleDateChange: date', date)
    this.setState({
      currentDateTime: date,
    })
  }
  
  render() {
    const { fieldLabel, fieldName, required } = this.props
    
    return (
      <Field
        component={this.dateTimePicker}
        name={fieldName}
        label={fieldLabel}
        onChange={(event, date) => this.handleDateChange(event, date)}
        required={required}
      />
    )
  }
  
}

export default DateTimeField

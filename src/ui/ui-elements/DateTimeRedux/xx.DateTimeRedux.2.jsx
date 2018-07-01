import React from 'react'
import { DateTimePicker } from 'material-ui-pickers'
import { Field, change } from 'redux-form'
import { green } from 'logger'

const dateTimePicker = (
  {
    input,
    meta: { touched, error, form },
    showErrorsInline,
    timezone,
    dispatch,
    ...custom
  }
) => {
  
  green('input', input)
  green('custom', custom)
  const d = new Date()
  
  const ret =  <DateTimePicker
      // name={input.name}
      error={touched && Boolean(error)}
      helperText={touched && error}
      value='10/23/2018'
      onChange={input.onChagne}
      // onChange={(event, date) => {console.log('event', event)}}
      format='MMM, DD YYYY    hh:mm A'
      {...input}
      {...custom}
    />
  return (
    ret  
  )
}

class DateTimeField extends React.Component {
  state = {
    currentDateTime: new Date()
  }
  handleDateChange = (d, e) => {
    // green('handleDateChange: d', d)
    green('handleDateChange: e', e)
    this.setState({
      currentDateTime: e,
    })
  }
  
  render() {
    const { fieldLabel, fieldName } = this.props
    const { currentDateTime } = this.state
    
    return (
      <Field
        component={props => {
          // green('props', props)
          // green('props', props)
          const { onChange, ...rest } = props.input
          
          const rChange = (d) => {
            green('rChange: d', d)
            onChange(d)
          }
          return (
            <DateTimePicker
              {...rest}
              onChange={(d) => rChange(d)}
              value={this.state.currentDateTime}
            />
          )
        }}
        name={fieldName}
        label={fieldLabel}
        onChange={(d, e) => this.handleDateChange(d, e)}
      />
    )
  }
  
}

export default DateTimeField

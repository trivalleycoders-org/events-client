import React from 'react'
import { DateTimePicker } from 'material-ui-pickers'
import isBefore from 'date-fns/isBefore'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography';


/* User */
import { green } from 'logger'

const styles = theme => ({
  wrapper: {
    display: 'flex',
    flexFlow: 'column nowrap'
  },
  datesWrapper: {
    display: 'flex',
    flexFlow: 'row wrap'
  },
  message: {
    color: theme.palette.error.main,
    lineHeight: '1em',
    minHeight: '1em',
  },
  messageWrapper: {
    margin: '8px 0 0 0',
  }
})

// color: '#f44336'
// 
class Combined extends React.Component {
  
  state = {
    minDate: new Date(),
    startDate: new Date(),
    endDate: new Date(),
  }

  localOnChange = (date, control) => {
    // green('date', date)
    // green('control', control)
    let sd
    let ed
    if (control === 'startDate') {
      sd = date
      if (isBefore(ed, sd)) {
        ed = sd
      } else {
        ed = this.state.endDate
      }
    } else {
      sd = this.state.startDate
      ed = date
    }
    
    this.setState({
      startDate: sd,
      endDate: ed,
    })
    this.props.onChange({
      startDate: sd,
      endDate: ed,
    })
  }

  render() {
  
    const { startDate, endDate, message, todayDate } = this.state
    const { classes } = this.props
    // green('props', this.props)
    green('classes', classes.message)
    
    return (
      <div className={classes.wrapper}>
        <div className={classes.datesWrapper}>
          <DateTimePicker
              //{...rest}
              label='Start Date'
              onChange={(date) => this.localOnChange(date, 'startDate')}
              value={startDate}
              format={this.props.format}
              minDate={todayDate}
              disablePast
            />
          <DateTimePicker
            // {...rest}
            label='End Date'
            onChange={(date) => this.localOnChange(date, 'endDate')}
            value={endDate}
            format={this.props.format}
            minDate={startDate}
            minDateMessage='End date cannot be before start date'
            disablePast
          />
        </div>
        <p className={classes.messageWrapper}>
          <Typography variant="caption" className={classes.message}>
            {message}
          </Typography>
        </p>
        
        
      </div>
    )
  }
  
}

export default withStyles(styles)(Combined)
import React from 'react'
import PropTypes from 'prop-types'
import { DateTimePicker } from 'material-ui-pickers'
import isBefore from 'date-fns/isBefore'
import { withStyles } from '@material-ui/core/styles'
import { InputAdornment } from '@material-ui/core'
import AlarmIcon from '@material-ui/icons/Alarm'
import EventIcon from '@material-ui/icons/Event'

/* Dev */
// eslint-disable-next-line
import { green } from 'logger'

const styles = theme => ({
  adornment: {
    padding: '3px 0',
  },
  dateTimePicker: {
    // paddingRight: '20px'
  },
  datesWrapper: {
    display: 'flex',
    flexFlow: 'row wrap'
  },
  wrapper: {
    display: 'flex',
    flexFlow: 'column nowrap'
  },
})

let startMinDate

// color: '#f44336'
// 
class Combined extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      startDate: props.initial ? props.initial.startDate : null,
      endDate: props.initial ? props.initial.startDate : null,
    }
  }

  localOnChange = (date, control) => {
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

    // calls redux-form onChange()
    this.props.onChange({
      startDate: sd,
      endDate: ed,
    })
  }
  render() {
  
    const { startDate, endDate } = this.state
    const { classes } = this.props
    
    return (
      <div className={classes.wrapper}>
        <div className={classes.datesWrapper}>
          <DateTimePicker
              //{...rest}
              className={classes.dateTimePicker}
              disablePast
              label='Start Date / Time'
              format={this.props.format}
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end' className={classes.adornment}>
                    <EventIcon />
                    <AlarmIcon />
                  </InputAdornment>
                )
              }}
              minDate={startMinDate}
              onChange={(date) => this.localOnChange(date, 'startDate')}
              value={startDate}
            />
          <DateTimePicker
            // {...rest}
            disablePast
            format={this.props.format}
            InputProps={{
                endAdornment: (
                  <InputAdornment position='end' className={classes.adornment}>
                    <EventIcon />
                    <AlarmIcon />
                  </InputAdornment>
                )
              }}
            label='End Date / Time'
            fullWidth
            minDate={startDate}
            minDateMessage='End date must be after start date'
            onChange={(date) => this.localOnChange(date, 'endDate')}
            value={endDate}
          />
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Combined)

Combined.propTypes = {
  initial: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  format: PropTypes.string.isRequired,
}

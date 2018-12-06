import React from 'react'
import PropTypes from 'prop-types'
import { DateTimePicker } from 'material-ui-pickers'
import isBefore from 'date-fns/isBefore'
import { withStyles } from '@material-ui/core/styles'
import { InputAdornment } from '@material-ui/core'
import AlarmIcon from '@material-ui/icons/Alarm'
import EventIcon from '@material-ui/icons/Event'

class Combined extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      startDateTime: props.initial ? props.initial.startDateTime : null,
      endDateTime: props.initial ? props.initial.startDateTime : null,
    }
  }

  localOnChange = (date, control) => {

    const { startDateTime, endDateTime } = this.state
    let sd = startDateTime
    let ed = endDateTime
    
    if (control === 'startDateTime') {
      sd = date
    } else {
      ed = date
    }

    if (control === 'startDateTime') {
      if (ed === null || isBefore(ed,sd)) {
        ed = sd
      }
      
    }

    this.setState({
      startDateTime: sd,
      endDateTime: ed,
    })
    // calls redux-form onChange()
    this.props.onChange({
      startDateTime: sd,
      endDateTime: ed,
    })
  }
  render() {
    const { startDateTime, endDateTime, /*errorEndDate, errorStartDate*/ } = this.state
    const { classes } = this.props
    return (
      <div className={classes.wrapper}>
        <div className={classes.datesWrapper}>
          <DateTimePicker
            disablePast
            label='Start Date / Time'
            format={this.props.format}
            fullWidth
            className={classes.dateTimePicker}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end' className={classes.adornment}>
                  <EventIcon />
                  <AlarmIcon />
                </InputAdornment>
              )
            }}
            //minDate={startMinDate}
            onChange={(date) => this.localOnChange(date, 'startDateTime')}
            required={true}
            value={startDateTime}
          />
          <DateTimePicker
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
            className={classes.dateTimePicker}
            minDate={startDateTime || new Date()}
            minDateMessage='End date must be after start date'
            onChange={(date) => this.localOnChange(date, 'endDateTime')}
            required={true}
            value={endDateTime}
          />
        </div>
      </div>
    )
  }
}

const styles = theme => ({
  adornment: {
    padding: '3px 0',
  },
  datesWrapper: {
    display: 'flex',
    flexFlow: 'row wrap'
  },
  dateTimePicker: {
    paddingBottom: 20,
  },
  wrapper: {
    display: 'flex',
    flexFlow: 'column nowrap'
  },
})

export default withStyles(styles)(Combined)

Combined.propTypes = {
  initial: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  format: PropTypes.string.isRequired,
}

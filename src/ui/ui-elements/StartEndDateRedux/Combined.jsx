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

let startMinDate

class Combined extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      startDate: props.initial ? props.initial.startDate : null,
      endDate: props.initial ? props.initial.startDate : null,
      errorStartDate: false,
      errorEndDate: false,
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

  onClose = (picker) => {
    const { startDate, endDate } = this.state
    if (picker === 'startDate') {
      if (startDate === null) {
        this.setState({
          errorStartDate: true,
      })
    }}
    if (picker === 'endDate') {
      if (endDate === null) {
        this.setState({
          errorEndDate: true,
      })
    }}
  }

  render() {
    const { startDate, endDate, errorEndDate, errorStartDate } = this.state
    const { classes } = this.props
    return (
      <div className={classes.wrapper}>
        <div className={classes.datesWrapper}>
          <DateTimePicker
            disablePast
            error={errorStartDate}
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
            onClose={() => this.onClose('startDate')}
            value={startDate}
          />
          <DateTimePicker
            disablePast
            error={errorEndDate}
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
            minDate={startDate || new Date()}
            minDateMessage='End date must be after start date'
            onChange={(date) => this.localOnChange(date, 'endDate')}
            onClose={() => this.onClose('endDate')}
            value={endDate}
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

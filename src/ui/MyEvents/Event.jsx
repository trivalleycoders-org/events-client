import React from 'react'
import { compose } from 'recompose'
import { withStyles } from '@material-ui/core/styles'
import {
  Paper,
  withWidth,
  Grid,
} from '@material-ui/core'
import { dateFormat } from './helpers'
import { Typography } from '@material-ui/core'
import ButtonFit from 'ui/elements/ButtonFit'
import Chevron5 from './Chevron5'

const Event = ({ classes, event }) => {
  return (
    <Paper>
      <Grid container>
        <Grid
          item
          xs={3}
          className={classes.date}
        >
          <Typography variant='h5' align='center' gutterBottom color='inherit'>
            {dateFormat(event.dates.startDateTime, 'day')}
          </Typography>
          <Typography variant='subtitle1' align='center' color='inherit'>
            {dateFormat(event.dates.startDateTime, 'moYr')}
          </Typography>
          <Typography variant='subtitle2' align='center' color='inherit'>
            {dateFormat(event.dates.startDateTime, 'time')}
          </Typography>
        </Grid>

        <Grid
          item
          xs={8}
          className={classes.detail}
        >
          <Typography variant='h6'>
            {event.title}
          </Typography>
          <Typography variant='subtitle1'>
            {event.location.cityName}, {event.location.stateCode}
          </Typography>
        </Grid>

        <Grid
          item xs={1}
          className={classes.chevronWrap}
        >
          <ButtonFit
            to={`/event-details/${event._id}`}
          >
            <Chevron5
              className={classes.svg}
              width={10}
              color={'#dc0747'}
            />
          </ButtonFit>
        </Grid>

      </Grid>
    </Paper>
  )

}

const styles = theme => {
  return ({
    svg: {
      width: 10,
      color: theme.palette.primary.main,
    },
    detail: {
      padding: theme.spacing.unit,
    },
    date: {
      padding: theme.spacing.unit,
      display: 'flex',
      flexFlow: 'column',
      justifyContent: 'center',
      backgroundColor: theme.palette.primary.main,
      color: 'white',
    },
  })
}

export default compose(
  withWidth(),
  withStyles(styles)
)(Event)

import React from 'react'
import { compose } from 'recompose'
import { withStyles } from '@material-ui/core/styles'
import {
  Paper,
  withWidth,
  Grid,
} from '@material-ui/core'
import blue from '@material-ui/core/colors/blue'
import { dateFormat } from './helpers'
import { Typography } from '@material-ui/core'
import ButtonFit from 'ui/elements/ButtonFit'
import Chevron5 from './Chevron5'
// Dev
// eslint-disable-next-line
import { green, purple } from 'logger'
import { logRender } from 'logging'

const Event = ({ classes, event, handleItemClick }) => {
  logRender && purple('Event (MyEvents) - render')
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
          <Typography variant='h5'>
            {event.title}
          </Typography>
          <Typography variant='subtitle1'>
            {event.location.cityName}, {event.location.stateCode}
          </Typography>
        </Grid>

        <Grid
          item xs={1}
          className={classes.chevronWrap}
          // onClick={() => handleItemClick(event._id)}
        >
          <ButtonFit
            to={`/event-details/${event._id}`}
          >
            <Chevron5
              className={classes.svg}
              width={10}
              color={blue[500]}
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

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
import Body1 from 'ui/ui-elements/typography/Body1'
import Body2 from 'ui/ui-elements/typography/Body2'
import Title from 'ui/ui-elements/typography/Title'
import ButtonFit from 'ui/ui-elements/ButtonFit'
import Chevron5 from './Chevron5'
// eslint-disable-next-line
import { green } from 'logger'

const Event = ({ classes, event, handleItemClick }) => {
  return (
    <Paper className={classes.wrapper}>
      <Grid container>
        <Grid
          item
          xs={3}
          className={classes.date}
        >
          <Title align='center' gutterBottom color='white'>
            {dateFormat(event.dates.startDateTime, 'day')}
          </Title>
          <Body1 align='center' color='white'>
            {dateFormat(event.dates.startDateTime, 'moYr')}
          </Body1>
          <Body1 align='center' color='white'>
            {dateFormat(event.dates.startDateTime, 'time')}
          </Body1>
        </Grid>

        <Grid
          item
          xs={8}
          className={classes.detail}
        >
          <Body2>
            {event.title}
          </Body2>
          <Body1>
            {event.location.cityName}, {event.location.stateCode}
          </Body1>
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
      color: 'blue',
    },
    detail: {
      padding: theme.spacing.unit,
    },
    date: {
      padding: theme.spacing.unit,
      display: 'flex',
      flexFlow: 'column',
      justifyContent: 'center',
      backgroundColor: blue[500],
      color: 'white',
    },
    wrapper: {
      display: 'flex',
      flexFlow: 'row nowrap',
    },
  })
}

export default compose(
  withWidth(),
  withStyles(styles)
)(Event)

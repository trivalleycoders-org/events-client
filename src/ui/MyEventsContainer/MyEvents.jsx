import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import {
  Grid,
  Typography,
} from '@material-ui/core'
/* User */
import Event from './Event'
import PageTitle from 'ui/elements/PageTitle'

/* Dev */
// eslint-disable-next-line
import { green, purple } from 'logger'
import { logRender } from 'logging'

const MyEvents = ({ classes, events }) => {

  logRender && purple('MyEvents - render')

  return (
    <div id='MyEvents' className={classes.wrapper}>
      <PageTitle>
        Your Events
      </PageTitle>
      <Grid container spacing={Number(8)}>
        {events.map(e => {
          return (
            <Grid key={e._id} item xs={12} lg={6}>
              <Event
                event={e}
              />
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}

const styles = theme => ({
  wrapper: {
    [theme.breakpoints.only('sm')]: {
      paddingLeft: '10%',
      paddingRight: '10%',
    },
    [theme.breakpoints.only('md')]: {
      paddingLeft: '20%',
      paddingRight: '20%',
    },
  },
})

export default withStyles(styles)(MyEvents)

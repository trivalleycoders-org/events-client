import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import {
  Grid,
} from '@material-ui/core'
/* User */
import Event from './Event'
import PageTitle from 'ui/elements/PageTitle'

const MyEvents = ({ classes, events }) => {
  return (
    <div id='MyEvents' className={classes.wrapper}>
      <PageTitle>
        Your Events
      </PageTitle>
      <Grid
        container
        spacing={16}
      >
        {events.map(e => {
          return (
            <Grid key={e._id} item xs={12} lg={12}>
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
    paddingBottom: 100,
    [theme.breakpoints.only('sm')]: {
      paddingLeft: '10%',
      paddingRight: '10%',
    },
    [theme.breakpoints.up('md')]: {
      paddingLeft: '20%',
      paddingRight: '20%',
    },
  },
  grid: {
    width: '100%'
  },
})

export default withStyles(styles)(MyEvents)

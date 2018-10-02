import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import {
  Grid,
} from '@material-ui/core'
/* User */
import Event from './Event'

/* Dev */
// eslint-disable-next-line
import { green } from 'logger'

const MyEvents = ({ classes, events }) => {

  return (
    <div className={classes.wrapper}>
      <Grid container spacing={Number(8)}>
        {events.map(n => {
          return (
            <Grid key={n._id} item xs={12} lg={6}>
              <Event
                event={n}
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

MyEvents.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(MyEvents)

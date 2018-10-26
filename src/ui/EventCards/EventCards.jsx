import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import {
  Grid,
} from '@material-ui/core'

import EventCard from './EventCard'
import { has } from 'ramda'

/* Dev */
// eslint-disable-next-line
import { green, purple } from 'logger'

const hasTags = has('tags')

const EventCards = (props) => {
  purple('EventCard(s) - render')
  const { classes, events } = props
  return (
    <div id='EventCards' className={classes.wrapper}>
      <Grid
        container
        spacing={40}
        className={classes.grid}
      >
        {events.map(c => {
          const location = `${c.location.cityName}, ${c.location.stateCode} ${c.location.postalCode}`
          // green('c', c)
          return (
            <Grid
              key={c._id}
              item
              xs={12} sm={6} md={6} lg={4}
              className={classes.gridItem}
            >
              <EventCard
                linkToUrl={c.linkToUrl}
                imageUrl={c.imageUrl}
                title={c.title}
                startDate={c.dates.startDateTime}
                location={location}
                hasTags={hasTags(c)}
                tags={c.tags}
              />
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}

const styles = theme => ({
  grid: {
  },
  gridItem: {
    // backgroundColor: 'pink',
    // margin: 1,
  },
  wrapper: {
    // backgroundColor: 'green',
    // paddingTop: theme.spacing.unit *3,
    // paddingBottom: theme.spacing.unit *3,
    padding: 20,
    // overflowX: 'hidden',
  },
})

export default withStyles(styles)(EventCards)

/*
venue: {
    // fontSize: '1.3em',
    overflow: 'hidden',
    paddingTop: '7px',
    paddingBottom: '4px',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },

organization: {
    height: '33px',
    lineHeight: '16.5px',
    overflow: 'hidden',
    paddingTop: '7px',
    paddingBottom: '4px',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
*/

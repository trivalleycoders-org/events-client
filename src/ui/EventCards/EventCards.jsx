import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import {
  Grid,
} from '@material-ui/core'

import EventCard from './EventCard'
import { has } from 'ramda'



/* Dev */
// eslint-disable-next-line
import { green } from 'logger'

const hasTags = has('tags')

const EventCards = (props) => {
  const { classes, events } = props

  return (
    <div id='EventCards' className={classes.wrapper}>
      <Grid
        container
        spacing={40}
        // direction='row'
        alignItems='space-around'

        // justify='center'
        // alignContent='center'
        className={classes.grid}
      >
        {events.map(c => {
          const location = `${c.location.cityName}, ${c.location.stateCode} ${c.location.postalCode}`
          // green('c', c)
          return (
            <Grid
              key={c._id}
              item
              xs={12} sm={6} md={4} lg={4}
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
  },
  wrapper: {
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
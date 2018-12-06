import React from 'react'
import { compose } from 'recompose'
import { withStyles } from '@material-ui/core/styles'
import {
  Grid,
} from '@material-ui/core'

import EventCard from './EventCard'
import { has } from 'ramda'

const hasTags = has('tags')

const EventCards = (props) => {
  const { classes, events } = props
  return (
    <div id='EventCards' className={classes.wrapper}>
      <Grid
        container
        spacing={40}
        className={classes.grid}
        wrap='wrap'
      >
        {events.map(c => {
          const location = `${c.location.cityName}, ${c.location.stateCode} ${c.location.postalCode}`
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
  wrapper: {
    padding: 20,
    width: '100%',
    [theme.breakpoints.only('xs')]: {
      paddingRight: 0,
      paddingLeft: 0,
    }
  },
})

export default compose(
  withStyles(styles)
) (EventCards)
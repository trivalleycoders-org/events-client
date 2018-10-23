import React from 'react'
import { Paper, Chip } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'
import { Link } from 'react-router-dom'

import A from 'ui/ui-elements/A'
import Title from 'ui/ui-elements/typography/Title'
import Body1 from 'ui/ui-elements/typography/Body1'
import Subheading from 'ui/ui-elements/typography/Subheading'

/* Dev */
// eslint-disable-next-line
import { green } from 'logger'

const hourAmPm = (date) => {
  const h = date.getHours()
  const tempMin = date.getMinutes()
  const m = (tempMin < 10) ? `0${tempMin}` : tempMin
  return (h > 12)
    ? `${h - 12}:${m} PM`
    : `${h}:${m} AM`
}

const formattedDate = (isoDateString) => {
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const d = new Date(isoDateString)
  const MMM = monthNames[d.getMonth()]
  const DDD = dayNames[d.getDay()]
  const dd = d.getDate()
  const hour = hourAmPm(d)
  return `${DDD}, ${MMM} ${dd} ${hour}`
}

const EventDetails = ({ classes, event }) => {
  const price = event.price ? `${event.price}` : 'Free'

  return (
    <div id='EventDetails'>
      <Paper className={classes.wrapper}>
        <div className={classNames(classes.row, classes.topRow)}>
          <div className={classes.cell}>
            <img src={event.imageUrl} className={classes.image} alt={event.tile}></img>
          </div>
          <div className={classes.cell}>
            <Title>{formattedDate(event.dates.startDateTime)}</Title>
            <Subheading>{price}</Subheading>
          </div>
        </div>
        <div className={classes.row}>
          <div className={classes.cell}>
            <Title>Date And Time</Title>
            <Subheading>Start Time</Subheading>
            <Body1>{formattedDate(event.dates.startDateTime)}</Body1>
            <Subheading>End Time</Subheading>
            <Body1>{formattedDate(event.dates.endDateTime)}</Body1>
          </div>
          <div className={classes.cell}>
            <Title>Location</Title>
            <Body1>{event.venueName}</Body1>
            <Body1>{event.location.cityName}</Body1>
            <Body1>{event.location.stateCode}</Body1>
            <Body1>{event.location.postalCode}</Body1>
          </div>
        </div>
        <div className={classes.row}>
          <div className={classes.cell}>
            <Title>Organization</Title>
            <Body1>{event.organization}</Body1>
          </div>
        </div>
        <div className={classes.row}>
          <div className={classes.cell}>
            <Title>URL</Title>
            <A>{event.linkToUrl}</A>
          </div>
        </div>
        <div className={classes.row}>
          <div className={classes.cell}>
            <Title>Tags</Title>
            {event.tags.map((t, index) => {
              return (
                <Chip className={classes.chip} key={`t${index}`} label={`#${t}`} />
              )
            })
            }
          </div>
        </div>
      </Paper>
    </div>
  )

}

const styles = theme => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '1em',
  },
  topRow: {
    borderBottom: '1px solid rgba(0,0,0,0.1)',
  },
  image: {
    height: '150px',
    width: '300px',
  },
  cell: {
    width: '100%',
  },
  cellRight: {
    width: '40%',
  },
  chip: {
    margin: theme.spacing.unit / 2,
  }
})

export default withStyles(styles)(EventDetails)
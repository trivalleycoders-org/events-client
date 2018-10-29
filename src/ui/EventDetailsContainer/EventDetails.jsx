import React from 'react'
import { Paper, Chip } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'
import { Typography } from '@material-ui/core'
import A from 'ui/elements/A'

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
      <Paper id='EventDetailsPaper' className={classes.wrapper}>
        <div className={classNames(classes.row, classes.topRow)}>
          <div className={classes.cell}>
            <img src={event.imageUrl} className={classes.image} alt={event.tile}></img>
          </div>
          <div className={classes.cell}>
            <Typography variant='h6'>{formattedDate(event.dates.startDateTime)}</Typography>
            <Typography  variant='subtitle'>{price}</Typography>
          </div>
        </div>
        <div className={classes.row}>
          <div className={classes.cell}>
            <Typography variant='h6'>Date And Time</Typography>
            <Typography variant='subtitle'>Start Time</Typography>
            <Typography variant='body2'>{formattedDate(event.dates.startDateTime)}</Typography>
            <Typography variant='subtitle'>End Time</Typography>
            <Typography variant='body2'>{formattedDate(event.dates.endDateTime)}</Typography>
          </div>
          <div className={classes.cell}>
            <Typography variant='h6'>Location</Typography>
            <Typography variant='body2'>{event.venueName}</Typography>
            <Typography variant='body2'>{event.location.cityName}</Typography>
            <Typography variant='body2'>{event.location.stateCode}</Typography>
            <Typography variant='body2'>{event.location.postalCode}</Typography>
          </div>
        </div>
        <div className={classes.row}>
          <div className={classes.cell}>
            <Typography variant='h6'>Organization</Typography>
            <Typography variant='body2'>{event.organization}</Typography>
          </div>
        </div>
        <div className={classes.row}>
          <div className={classes.cell}>
            <Typography variant='h6'>URL</Typography>
            <A>{event.linkToUrl}</A>
          </div>
        </div>
        <div className={classes.row}>
          <div className={classes.cell}>
            <Typography variant='h6'>Tags</Typography>
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
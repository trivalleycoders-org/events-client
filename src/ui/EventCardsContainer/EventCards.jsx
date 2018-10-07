import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import {
  Grid,
  Typography,
  Card,
  CardActions,
  CardMedia,
  CardContent,
} from '@material-ui/core'
import { has } from 'ramda'

/* User */
import Tag from './Tag'

/* Dev */
// eslint-disable-next-line
import { green } from 'logger'

const hourAmPm = (date) => {
  const h = date.getHours()
  const m = date.getMinutes()
  return (h > 12)
    ? `${h-12}:${m} PM`
    : `${h}:${m} AM`
}

const formattedDate = (isoDateString) => {
  const dayNames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
  const monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
  const d = new Date(isoDateString)
  const MMM = monthNames[d.getMonth()]
  const DDD = dayNames[d.getDay()]
  const dd = d.getDate()
  const hour = hourAmPm(d)
  return `${DDD}, ${MMM} ${dd} ${hour}`
}

const hasTags = has('tags')

const EventCards = (props) => {
  const { classes, events } = props
  return (
    <Grid container spacing={Number(32)} className={classes.outer} >
      {events.map(c => {
        const location = `${c.location.cityName}, ${c.location.stateCode} ${c.location.postalCode}`
        return (
          <Grid key={c._id} item xs={12} sm={6} md={4} >
            <Card className={classes.card}>
              <a href={c.linkToUrl} className={classes.link}>
                <CardMedia
                  className={classes.media}
                  image={c.imageUrl}
                >
                </CardMedia>
                <CardContent className={classes.cardContent}>
                  <Typography variant='caption' component='p' noWrap className={classes.time}>
                    {formattedDate(c.dates.startDateTime)}
                  </Typography>
                  <Typography variant='subheading' component='p' className={classes.title}>
                    {c.title}
                  </Typography>
                  <Typography variant='caption' component='p' noWrap className={classes.organization}>
                    {`by: ${c.organization}`}
                  </Typography>
                  <Typography variant='caption' component='p' noWrap className={classes.venue}>
                    {c.venueName}
                  </Typography>
                  <Typography variant='caption' component='p' noWrap className={classes.venue}>
                    {location}
                  </Typography>
                </CardContent>
              </a>
              <CardActions className={classes.actions} disableActionSpacing>
                <div className={classes.tags}>
                  {
                    hasTags(c)
                      ? c.tags.map((t, index) => (
                          <Tag key={`t${index}`} label={t} />
                        ))
                      : null
                  }
                </div>

              </CardActions>
            </Card>
          </Grid>
        )
      })}
    </Grid>
  )
}

const styles = {
  action: {
    border: 'none',
  },
  actions: {
    display: 'flex',
    flexFlow: 'row nowrap',
    height: 41.5,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0px 15px 0px 15px',
  },
  card: {
    minHeight: 0,
    minWidth: 0,
    padding: '15px 5px 0 5px',
  },
  cardContent: {
    padding: '5px 15px 5px 15px',
    borderBottom: 'solid 0.5px gray',
  },
  link: {
    textDecoration: 'none',
  },
  tags: {
    display: 'flex',
    flexFlow: 'row nowrap',
    overflow: 'hidden',
  },
  media: {
    height: 0,
    paddingTop: '50%',
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
  outer: {
    paddingBottom: '40px'
  },
  time: {
    overflow: 'hidden',
    paddingTop: '.4rem',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
  title: {
    height: '40px',
    letterSpacing: '0px',
    lineHeight: '19px',
    margin: 0,
    overflow: 'hidden',
    paddingTop: '5px',
  },
  venue: {
    overflow: 'hidden',
    paddingTop: '7px',
    paddingBottom: '4px',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
}

export default withStyles(styles)(EventCards)
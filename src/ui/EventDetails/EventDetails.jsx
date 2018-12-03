import React from 'react'
import { Paper, Typography, Chip } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import DateRangeIcon from '@material-ui/icons/DateRange'
import Button from '@material-ui/core/Button'
import LocationIcon from '@material-ui/icons/LocationOn'
import BusinessIcon from '@material-ui/icons/Business'
import DeleteForever from '@material-ui/icons/DeleteForever'
import Edit from '@material-ui/icons/Edit'
import LinkIcon from '@material-ui/icons/Link'
import LabelIcon from '@material-ui/icons/Label'

import IconButtonLink from 'ui/elements/IconButtonLink'
import ResponsiveImage from 'ui/elements/ResponsiveImage'
import ConfirmDialog from 'ui/ConfirmDialog'

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
  const YYY = d.getFullYear()
  const MMM = monthNames[d.getMonth()]
  const DDD = dayNames[d.getDay()]
  const dd = d.getDate()
  const hour = hourAmPm(d)
  return `${DDD}, ${MMM} ${dd} ${YYY} ${hour}`
}
class EventDetails extends React.Component {

  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true })
  };

  handleClose = (option) => {
    this.setState({ open: false })
    this.props.deleteEvent(this.props.event._id, option)
  };

  render() {
    const { classes, event } = this.props
    const price = event.price ? `$${event.price}` : 'Free'

    return (
      <Paper className={classes.wrapper}>
        <div className={classes.media}>
          <div className={classes.mediaImg}>
            <ResponsiveImage alt='Drone Image' src={event.imageUrl} />
          </div>
          <Typography variant='h5' className={classes.title} color='primary'>
            {event.title}
          </Typography>
          <div className={classes.content}>
            <Typography variant='caption'>by {event.organization}</Typography>
            <Typography variant='h6'>{formattedDate(event.dates.startDateTime)}</Typography>
          </div>
          <div className={classes.footer}>
            <div className={classes.price}>
              <Typography variant='subtitle1'>{price}</Typography>
            </div>
            <div className={classes.buttonBox}>
              <IconButtonLink to={`/edit-event/${event._id}`}>
                <Edit />
              </IconButtonLink>
              <Button color='primary'>
                <DeleteForever onClick={this.handleClickOpen} />
                <ConfirmDialog open={this.state.open} handleOpen={this.handleOpen} handleClose={this.handleClose} />
              </Button>
            </div>
          </div>
        </div>

        <div className={classes.dateLocation}>
          <div className={classes.date}>
            <div className={classes.dateIcon}>
              <DateRangeIcon
              />
            </div>
            <div className={classes.dateValue}>
              <Typography variant='h6'>Start Time</Typography>
              <Typography variant='subtitle2'>{formattedDate(event.dates.startDateTime)}</Typography>
              <Typography variant='h6'>End Time</Typography>
              <Typography variant='subtitle2'>{formattedDate(event.dates.endDateTime)}</Typography>
            </div>
          </div>
          <div className={classes.location}>
            <div className={classes.locationIcon}>
              <LocationIcon
              />
            </div>
            <div className={classes.locationValue}>
              <Typography variant='subtitle1'>{event.venueName}</Typography>
              <Typography variant='subtitle2'>{event.location.cityName}</Typography>
              <Typography variant='subtitle2'>{event.location.stateCode} {event.location.postalCode}</Typography>
            </div>
          </div>
        </div>

        <div className={classes.organization}>
          <div className={classes.orgIcon}>
            <BusinessIcon
            />
          </div>
          <div className={classes.orgValue}>
            <Typography variant='subtitle1'>{event.organization}</Typography>
          </div>
        </div>

        <div className={classes.url}>
          <div className={classes.urlIcon}>
            <LinkIcon
            />
          </div>
          <div className={classes.urlValue}>
            <a href={event.linkToUrl}>
              <Typography variant='subtitle1'>{event.linkToUrl}</Typography>
            </a>
          </div>
        </div>

        <div className={classes.tag}>
          <div className={classes.tagIcon}>
            <LabelIcon
            />
          </div>
          <div className={classes.tagValue}>
            <div className={classes.chipbox}>
              {event.tags.map((t, index) => {
                return (
                  <Chip className={classes.chip} key={`t${index}`} label={`#${t}`} />
                )
              })
              }
            </div>
          </div>
        </div>
      </Paper>
    )
  }
}

const styles = theme => ({
  wrapper: {
    display: 'grid',
    gridRowGap: '1em',
    paddingTop: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
    marginLeft: theme.spacing.unit * 2,
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: '1fr',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  media: {
    borderBottom: '1px solid rgb(225,225,225)',
    display: 'grid',
    gridColumnGap: '1em',
    gridTemplateColumns: 'minmax(150px, 2fr) 3fr',
    gridTemplateRows: 'auto 1fr',
    gridTemplateAreas: '\'img title\' \'img body\' \'img footer\'',
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: '1fr',
      gridTemplateAreas: '\'img\' \'title\' \'body\' \'footer\'',
    }
  },
  title: {
    gridArea: 'title',
  },
  mediaImg: {
    marginRight: '1em',
    gridArea: 'img',
    [theme.breakpoints.down('xs')]: {
      borderBottom: '1px solid rgb(225,225,225)',
    }
  },
  img: {
    maxWidth: '100%',
  },
  content: {
    gridArea: 'body',
  },
  footer: {
    alignItems: 'flex-end',
    display: 'grid',
    gridArea: 'footer',
    gridTemplateColumns: '1fr 1fr',
    paddingTop: '1em',
  },
  price: {
    justifySelf: 'flex-start',
  },
  buttonBox: {
    justifySelf: 'flex-end',
  },
  link: {
    padding: 0,
  },
  dateLocation: {
    display: 'grid',
    gridTemplateColumns: '2fr 3fr',
    [theme.breakpoints.down('xs')]: {
      gridTemplateColumns: '1fr',
    }
  },
  date: {
    display: 'grid',
    gridTemplateColumns: '48px 1fr',
  },
  location: {
    display: 'grid',
    gridTemplateColumns: '48px 1fr',
  },
  organization: {
    display: 'grid',
    gridTemplateColumns: '48px 1fr',
  },
  url: {
    display: 'grid',
    gridTemplateColumns: '48px 1fr',
  },
  tag: {
    display: 'grid',
    gridTemplateColumns: '48px 1fr',
  },
  chip: {
    marginRight: theme.spacing.unit / 2,
  },
  chipBox: {
    display: 'flex',
    justifyContent: 'space-evenly',
  }
})

export default withStyles(styles)(EventDetails)

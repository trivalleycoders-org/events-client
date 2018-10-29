import React from 'react'
import { Paper, Typography, Chip } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import DateRangeIcon from '@material-ui/icons/DateRange'
import LocationIcon from '@material-ui/icons/LocationOn'
import BusinessIcon from '@material-ui/icons/Business'
import LinkIcon from '@material-ui/icons/Link'
import LabelIcon from '@material-ui/icons/Label'
import classNames from 'classnames'
import { Link } from 'react-router-dom'

// import A from 'ui/ui-elements/A'
// import Title from 'ui/ui-elements/typography/Title'
// import Caption from 'ui/ui-elements/typography/Caption'
//import Subheading from 'ui/elements/typography/Subheading'
import ResponsiveImage from 'ui/elements/ResponsiveImage'

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
  const YYY = d.getFullYear()
  const MMM = monthNames[d.getMonth()]
  const DDD = dayNames[d.getDay()]
  const dd = d.getDate()
  const hour = hourAmPm(d)
  return `${DDD}, ${MMM} ${dd} ${YYY} ${hour}`
}

const EventDetails = ({ classes, event }) => {
  const price = event.price ? `$${event.price}` : 'Free'

  return (
    <Paper className={classes.wrapper} elevation={0}>
      <div className={classes.picturePriceDate}>
        <div className={classes.imgContainer}>
          <ResponsiveImage alt='Drone Image' src={event.imageUrl} className={classes.img} />
        </div>
        <div className={classes.datePrice}>
          <div className={classes.dateOrg}>
            <Typography variant='h5'>
              {formattedDate(event.dates.startDateTime)}
            </Typography>
            <Typography variant='caption'>by {event.organization}</Typography>
          </div>
          <div>
            <Typography variant='subtitle1'>{price}</Typography>
          </div>
        </div>
      </div>
    </Paper>
  )
}

const styles = theme => ({
  wrapper: {
    display: 'flex',
    margin: '10px auto',
  },
  picturePriceDate: {
    display: 'flex',
    width: '100%',
    [theme.breakpoints.up('xs')]: {
      flexFlow: 'row wrap',
    },
    [theme.breakpoints.up('lg')]: {
      flexFlow: 'row nowrap',
    },
  },
  imgContainer: {
    flexBasis: '50%',
    margin: '0 auto 0 auto',
    // maxWidth: 390, // was 250?
    [theme.breakpoints.up('xs')]: {
      minHeight: '150px',
      minWidth: '300px',
    },
    [theme.breakpoints.up('sm')]: {
      minHeight: '150px',
      minWidth: '300px',
    },
    [theme.breakpoints.up('md')]: {
      minHeight: '225px',
      minWidth: '450px',
    },
  },
  img: {
    height: '100%',
    objectFit: 'cover',
    width: '100%',
  },
  datePrice: {
    backgroundColor: 'rgba(0,0,0,0.04)',
    display: 'flex',
    flexBasis: '50%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingLeft: theme.spacing.unit * 4,
  },
  date: {
    marginBottom: '0',
  },
  dateOrg: {
    justifyContent: 'flex-start',
  },
  price: {
    // fontWeight: '600',
  },
  venue: {
    marginBottom: '0',
  },
  cell: {
    flexBasis: '100%',
  },
  leftCell: {
    flexBasis: '50%',
  },
  cellRight: {
    flexBasis: '50%',
  },
  dateTime: {
    // marginTop: '-1em',
    marginBottom: '1em',
  },
  chip: {
    margin: theme.spacing.unit / 2,
  },
  chipBox: {
    display: 'flex',
    justifyContent: 'space-evenly',
  }
})

// <Paper className={classes.wrapper} elevation={0}>
// <div className={classes.leftCell}>
//   <DateRangeIcon
//   />
//   <Title>Start Time</Title>
//   <Subheading className={classes.dateTime}>{formattedDate(event.dates.startDateTime)}</Subheading>
//   <Title>End Time</Title>
//   <Subheading className={classes.dateTime}>{formattedDate(event.dates.endDateTime)}</Subheading>
// </div>
// <div className={classes.rightCell}>
//   <LocationIcon
//   />
//   <Title className={classes.venue}>{event.venueName}</Title>
//   <Subheading>{event.location.cityName}</Subheading>
//   <Subheading>{event.location.stateCode} {event.location.postalCode}</Subheading>
// </div>
// </Paper>
// <Paper className={classes.wrapper} elevation={0}>
// <div>
//   <BusinessIcon
//   />
//   <Subheading>{event.organization}</Subheading>
// </div>
// </Paper>
// <Paper className={classes.wrapper} elevation={0}>
// <div>
//   <LinkIcon
//   />
//   <A>{event.linkToUrl}</A>
// </div>
// </Paper>
// <Paper className={classes.wrapper} elevation={0}>
// <div className={classes.cell}>
//   <LabelIcon
//   />
//   <div className={classes.chipbox}>
//     {event.tags.map((t, index) => {
//       return (
//         <Chip className={classes.chip} key={`t${index}`} label={`#${t}`} />
//       )
//     })
//     }
//   </div>
// </div>
// </Paper>

export default withStyles(styles)(EventDetails)

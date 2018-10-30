import React from 'react'
import { Paper, Typography, Chip, IconButton } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import DateRangeIcon from '@material-ui/icons/DateRange'
import LocationIcon from '@material-ui/icons/LocationOn'
import BusinessIcon from '@material-ui/icons/Business'
import DeleteForever from '@material-ui/icons/DeleteForever'
import Edit from '@material-ui/icons/Edit'
import LinkIcon from '@material-ui/icons/Link'
import LabelIcon from '@material-ui/icons/Label'
import classNames from 'classnames'
import { Link } from 'react-router-dom'

import IconButtonLink from 'ui/elements/IconButtonLink'
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
    <React.Fragment>
      <Paper className={classes.toolbar} elevation={0}>
        <div className={classes.title}>
          <Typography variant='h5' color='inherit'>
            {event.title}
          </Typography>
        </div>
        <div id='ToobarButtons' className={classes.actionButtons}>
          <IconButton>
            <IconButtonLink to={`/edit-event/${event._id}`}>
              <Edit
                className={classes.editBtnIcon}
              />
            </IconButtonLink>
          </IconButton>
          <IconButton>
            <IconButtonLink to={`/edit-event/${event._id}`}>
              <DeleteForever
                className={classes.deleteBtnIcon}
              />
            </IconButtonLink>
          </IconButton>
        </div>
      </Paper>
      <Paper className={classes.wrapper} elevation={0}>
        <div className={classes.picturePriceDate}>
          <div className={classes.imgContainer}>
            <ResponsiveImage alt='Drone Image' src={event.imageUrl} className={classes.img} />
          </div>
          <div className={classes.datePrice}>
            <div className={classes.dateOrg}>
              <Typography variant='h6'>
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
      <Paper className={classes.wrapper} elevation={0}>
        <div className={classes.leftCell}>
          <div className={classes.innerLeftCell}>
            <DateRangeIcon
            />
          </div>
          <div className={classes.innerRightCell}>
            <Typography variant='h6'>Start Time</Typography>
            <Typography variant='subtitle2'>{formattedDate(event.dates.startDateTime)}</Typography>
            <Typography variant='h6'>End Time</Typography>
            <Typography variant='subtitle2'>{formattedDate(event.dates.endDateTime)}</Typography>
          </div>
        </div>
        <div className={classes.rightCell}>
          <div className={classes.innerLeftCell}>
            <LocationIcon
            />
          </div>
          <div className={classes.innerRightCell}>
            <Typography variant='subtitle1'>{event.venueName}</Typography>
            <Typography variant='subtitle2'>{event.location.cityName}</Typography>
            <Typography variant='subtitle2'>{event.location.stateCode} {event.location.postalCode}</Typography>
          </div>
        </div>
      </Paper>
      <Paper className={classes.wrapper} elevation={0}>
        <div className={classes.leftCell}>
          <div className={classes.innerLeftCell}>
            <BusinessIcon
            />
          </div>
          <div className={classes.innerRightCell}>
            <Typography variant='subtitle1'>{event.organization}</Typography>
          </div>
        </div>
      </Paper>
      <Paper className={classes.wrapper} elevation={0}>
        <div className={classes.row}>
          <div className={classes.linkIconCell}>
            <LinkIcon
            />
          </div>
          <div className={classes.linkUrlCell}>
            <a href={event.linkToUrl}>
              <Typography variant='subtitle1'>{event.linkToUrl}</Typography>
            </a>
          </div>
        </div>
      </Paper>
      <Paper className={classes.wrapper} elevation={0}>
        <div className={classes.leftCell}>
          <div className={classes.innerLeftCell}>
            <LabelIcon
            />
          </div>
          <div className={classes.innerRightCell}>
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
    </React.Fragment>
  )
}

const styles = theme => ({
  toolbar: {
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.04)',
    display: 'flex',
    margin: '10px auto',
    justifyContent: 'space-between',
  },
  title: {
    justifyContent: 'flex-start',
  },
  actionButtons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
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
      flexBasis: '100%',
      minHeight: '150px',
      minWidth: '300px',
    },
    [theme.breakpoints.up('sm')]: {
      flexBasis: '100%',
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
  row: {
    display: 'flex',
    flexBasis: '100%',
  },
  leftCell: {
    display: 'flex',
    flexBasis: '50%',
  },
  rightCell: {
    display: 'flex',
    flexBasis: '50%',
  },
  innerLeftCell: {
    flexBasis: '10%',
  },
  innerRightCell: {
    flexBasis: '90%',
  },
  linkIconCell: {
    flexBasis: '5%',
  },
  linkUrlCell: {
    flexBasis: '95%',
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

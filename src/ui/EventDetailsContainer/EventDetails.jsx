import React from 'react'
import { Paper } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

import Title from 'ui/ui-elements/typography/Title'
import Body1 from 'ui/ui-elements/typography/Body1'

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
  // const dayNames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
  // const monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
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
  // const handleDeleteClick = () => {

  // }
  return (
    <div id='EventDetails'>
      <Paper className={classes.wrapper}>
        <div className={classes.row}>
          <div>
            <Title>Date And Time</Title>
            <Body1>{formattedDate(event.dates.startDateTime)}</Body1>
            <Body1>{formattedDate(event.dates.endDateTime)}</Body1>
          </div>
          <div>
            <Title>Price</Title>
            <Body1>{event.price}</Body1>
          </div>
        </div>
        <div className={classes.row}>
          <div>
            <Title>Organization</Title>
            <Body1>{event.organization}</Body1>
          </div>
          <div>
            <Title>Location</Title>
            <Body1>{event.venueName}</Body1>
            <Body1>{event.location.cityName}</Body1>
            <Body1>{event.location.stateCode}</Body1>
            <Body1>{event.location.postalCode}</Body1>
          </div>
        </div>
        <div className={classes.row}>
          <div>
            <Title>URL</Title>
            <Body1>{event.linkToUrl}</Body1>
          </div>
        </div>
        <div className={classes.row}>
          <div>
            <Title>Tags</Title>
            {event.tags.map((t, index) => {
              return (
                <Body1 key={`t${index}`}>{t}</Body1>
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
    borderBottom: '1px solid rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '1em',
  }
})

export default withStyles(styles)(EventDetails)


// return (
//   <div id='EventDetails'>
//     <Paper className={classes.wrapper}>
//       <div className={classes.row}>
//         <div>
//           <Title>Date And Time</Title>
//           <p>{formattedDate(event.dates.startDateTime)}</p>
//           <p>{formattedDate(event.dates.endDateTime)}</p>
//         </div>
//         <div>
//           <Title>Price</Title>
//           <p>{event.price}</p>
//         </div>
//       </div>
//       <div className={classes.row}>
//         <div>
//           <Title>Organization</Title>
//           <p>{event.organization}</p>
//         </div>
//         <div>
//           <Title>Location</Title>
//           <p>{event.venueName}</p>
//           <p>{event.location.cityName}</p>
//           <p>{event.location.stateCode}</p>
//           <p>{event.location.postalCode}</p>
//         </div>
//       </div>
//       <div>
//         <Title>URL</Title>
//         <p>{event.linkToUrl}</p>
//       </div>
//       <div>
//         <Title>Tags</Title>
//         {event.tags.map((t, index) => {
//           return (
//             <p key={`t${index}`}>{t}</p>
//           )
//         })
//         }
//       </div>
//     </Paper>
//   </div>
// )
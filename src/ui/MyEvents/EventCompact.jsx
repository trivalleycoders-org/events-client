import React from 'react'
import { compose } from 'recompose'
import { withStyles } from '@material-ui/core/styles'
import {
  Paper,
  withWidth,
  Tooltip,
  IconButton,
} from '@material-ui/core'
import {
  Delete as DeleteIcon,
  Edit as EditIcon
} from '@material-ui/icons'
import format from 'date-fns/format'

import Body1 from 'ui/ui-elements/typography/Body1'
import Body2 from 'ui/ui-elements/typography/Body2'
import StartDate from './StartDate'
import EndDate from './EndDate'
import StartTime from './StartTime'
import EndTime from './EndTime'
// import Title from 'ui/ui-elements/typography/Title'

const dateFormat = 'MMM d, YYYY'
const timeFormat = 'h:mm a'

const Price = ({ event, classes }) => {
  return (
    <div id='Price' className={classes.price}>
      <Body1 align='center'>
        {
          event.price
            ? `$${event.price}`
            : 'Free'
        }
      </Body1>
    </div>
  )
}

const Event = ({ classes, event, isSelected, width }) => {
  return (
    <Paper className={classes.wrapper}>
      <div id='title' className={classes.title}>
        <Body2>
          {event.title}
        </Body2>
        <Body1>
          {event.cityName}, {event.stateCode}
        </Body1>
      </div>
      <div className={classes.datesXS}>
        <StartDate event={event} classes={classes} />
        <EndDate event={event} classes={classes} />
        <Price event={event} classes={classes} />
      </div>



      <div id='actions' className={classes.actions}>
        <Tooltip title="Edit">
          <IconButton aria-label="Edit" onClick={e => this.handleEditClick(e)}>
            <EditIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete">
          <IconButton aria-label="Delete" onClick={e => this.handleDeleteClick(e)}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </div>
    </Paper>
  )
}

const styles = theme => {
  const padTopBottom = `${theme.spacing.unit}px`
  const padLeftRight = `${theme.spacing.unit}px`
  return ({
    datesXS: {
      display: 'flex',
      flexFlow: 'row nowrap',
    },
    actions: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'space-around',
      flexBasis: '10%',
    },
    title: {
      padding: `${padTopBottom} ${padLeftRight} ${padTopBottom} ${padLeftRight}`,
      flexBasis: '45%',
      flexFlow: 'column',
      backgroundColor: 'tan',
    },
    date: {
      // padding: `${padTopBottom} ${padLeftRight} ${padTopBottom} ${padLeftRight}`,
      // // flexBasis: '25%',
      // display: 'flex',
      // flexFlow: 'column',
      // justifyContent: 'center',
      backgroundColor: 'pink',
    },
    price: {
      padding: `${padTopBottom} ${padLeftRight} ${padTopBottom} ${padLeftRight}`,
      flexBasis: '20%',
      display: 'flex',
      flexFlow: 'column',
      justifyContent: 'center',
      backgroundColor: 'yellow',
      // height: '100%',
    },
    wrapper: {
      display: 'flex',
      flexFlow: 'row nowrap',
      [theme.breakpoints.down('xs')]: {
        flexFlow: 'column nowrap',
      }
    },
  })
}

export default compose(
  withWidth(),
  withStyles(styles)
)(Event)


/*
<div>{format(n.endDateTime, dateFormat)}</div>
                  <div>{format(n.endDateTime, timeFormat)}</div>
*/

// {n.price || 'Free'}
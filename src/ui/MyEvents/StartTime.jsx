import React from 'react'
// import { withStyles } from '@material-ui/core/styles'
import { timeFormat } from './helpers'
import Body1 from 'ui/ui-elements/typography/Body1'
import format from 'date-fns/format'

const StartTime = ({ event, classes }) => {
  return (
    <div id='startTime' className={classes.date}>
      <Body1>
        {format(event.startDateTime, timeFormat)}
      </Body1>
    </div>
  )
}

// const styles = {}

export default StartTime


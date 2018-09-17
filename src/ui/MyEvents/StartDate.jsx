import React from 'react'
// import { withStyles } from '@material-ui/core/styles'
import { dateFormat } from './helpers'
import Body1 from 'ui/ui-elements/typography/Body1'
import format from 'date-fns/format'

const StartDate = ({ event, classes }) => {
  return (
    <div id='startDate' className={classes.date}>
      <Body1>
        {format(event.startDateTime, dateFormat)}
      </Body1>
    </div>
  )
}

// const styles = {}

export default StartDate


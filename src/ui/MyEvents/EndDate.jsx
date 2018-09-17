import React from 'react'
// import { withStyles } from '@material-ui/core/styles'
import { dateFormat } from './helpers'
import Body1 from 'ui/ui-elements/typography/Body1'
import format from 'date-fns/format'

const EndDate = ({ event, classes }) => {
  return (
    <div id='endDate' className={classes.date}>
      <Body1>
        {format(event.endDateTime, dateFormat)}
      </Body1>
    </div>
  )
}

// const styles = {}

export default EndDate


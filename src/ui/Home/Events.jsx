import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import {
  Typography,
} from '@material-ui/core'

/* User */
import * as eventsSelectors from '../../store/selectors/events-selectors'
import * as requestSelectors from '../../store/selectors/request-selectors'
import { requestKeyReadEvents } from 'store/actions/event-actions'
import EventsGrid from './EventsGrid'

/* Dev */
// eslint-disable-next-line
import { green } from 'logger'

const styles = theme => ({
  pageMock: {
    margin: 'auto',
  },
})

class Events extends React.Component {
  state = {
    spacing: '16'
  }

  render() {
    const { classes, events } = this.props
    if (this.props.requestReadAllEvents.status === 'success') {
      return (
        <div className={classes.pageMock}>
          <EventsGrid events={events} />
        </div>
      )
    } else {
      return (
        <Typography variant='display1'>
          Loading
        </Typography>
      )
    }
  }
}

Events.propTypes = {
  classes: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
  return {
    events: eventsSelectors.getAllEvents(state),
    requestReadAllEvents: requestSelectors.getRequest(state, requestKeyReadEvents)
  }
}

export default compose(
  withStyles(styles),
  connect(mapStateToProps)
)(Events)

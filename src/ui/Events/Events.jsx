import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withStyles } from '@material-ui/core/styles'
import {
  Typography,
} from '@material-ui/core'

/* User */
import * as pageMessageActions from 'store/actions/page-message-actions'
import * as eventActions from 'store/actions/event-actions'
import * as eventsSelectors from '../../store/selectors/events-selectors'
import * as requestSelectors from '../../store/selectors/request-selectors'
import * as authSelectors from 'store/selectors/auth-selectors'
import { eventsReadRequestKey } from 'store/actions/event-actions'
import EventsGrid from 'ui/EventsGrid'
// import EventsGridList from 'ui/EventsGridList'
import MyEvents from 'ui/MyEvents'
import SearchBox from 'ui/SearchBox'
/* Dev */
// eslint-disable-next-line
import { green } from 'logger'

const styles = theme => ({
  pageMock: {
    marginTop: 100,
  }
})

class Events extends React.Component {

  constructor(props) {
    super(props)
    this.props.pageMessageActions.pageMessage('')
  }

  componentDidMount() {
    this.props.eventActions.eventsReadRequest('Events')
  }

  render() {
    const { classes, events, match } = this.props
    if (this.props.requestReadAllEvents.status !== 'success') {
      return (
        <Typography variant='display1'>
          Loading
        </Typography>
      )
    }
    if (match.path === '/my-events') {
      return (
        <div className={classes.pageMock}>
          <MyEvents events={events} />
        </div>
      )
    } else {
      return (
        <div className={classes.pageMock}>
          <SearchBox />
          <EventsGrid events={events} />
        </div>
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
    requestReadAllEvents: requestSelectors.getRequest(state, eventsReadRequestKey),
    currentUserId: authSelectors.getUserId(state),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    eventActions: bindActionCreators(eventActions, dispatch),
    pageMessageActions: bindActionCreators(pageMessageActions, dispatch)
  }
}

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
)(Events)

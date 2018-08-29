import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import {
  Typography,
} from '@material-ui/core'

/* User */
import * as eventActions from 'store/actions/event-actions'
import * as eventsSelectors from '../../store/selectors/events-selectors'
import * as requestSelectors from '../../store/selectors/request-selectors'
import * as authSelectors from 'store/selectors/auth-selectors'
import { eventsReadRequestKey } from 'store/actions/event-actions'
import EventsGrid from './EventsGrid'
import MyEvents from 'ui/MyEvents'
/* Dev */
// eslint-disable-next-line
import { green } from 'logger'

const styles = theme => ({})

class Events extends React.Component {
  state = {
    spacing: '16',
  }

  componentDidMount() {
    green('EVENTS didMount()')
    this.props.eventsReadRequest('Events')
    const params = this.props.match.params
    // green('params', params)
    // green('match', this.props.match)
    // green('Events: currentUser', this.props.currentUserId)
    const path = this.props.match.path
    if (path === '/search') {
      // green('Events: going to SEARCH')
      // this.props.requestSearchEvents(params.searchValue)
    } else if (path === '/my-events') {
      // green('Events: going to MyEvents')
      this.props.eventsReadRequest(params.user)
    } else {
      // green('Events: going to Events')
      //
    }

  }

  static getDerivedStateFromProps(nextProps, prevState) {
    green('EVENTS getDerivedStateFromProps()')
    return null
  }

  componentDidUpdate(prevProps, prevState) {
    green('EVENTS didUpdate()')
    // you can set state here
  }

  render() {
    const { classes, events, match } = this.props
    green('** Events: props', this.props)
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
          <EventsGrid events={events}/>
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

export default compose(
  withStyles(styles),
  connect(mapStateToProps, eventActions)
)(Events)

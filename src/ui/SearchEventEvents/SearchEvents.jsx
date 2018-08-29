import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import {
  Typography,
} from '@material-ui/core'
import { merge } from 'ramda'

/* User */
import * as eventActions from 'store/actions/event-actions'
import * as eventsSelectors from '../../store/selectors/events-selectors'
import * as requestSelectors from '../../store/selectors/request-selectors'
import * as authSelectors from 'store/selectors/auth-selectors'
import * as searchActions from 'store/actions/search-actions'
import * as searchSelectors from 'store/selectors/search-selectors'
import { eventsReadRequestKey } from 'store/actions/event-actions'
import EventsGrid from 'ui/EventsGrid'
import MyEvents from 'ui/MyEvents'
import SearchEvent from 'ui/SearchEvent'
/* Dev */
// eslint-disable-next-line
import { green } from 'logger'

const styles = theme => ({})

class Events extends React.Component {
  state = {
    spacing: '16',
  }

  componentDidMount() {
    this.props.eventsReadRequest('Events')
    // green('EVENTS didMount()')
    // const params = this.props.match.params
    // green('params', params)
    // green('match', this.props.match)
    // green('Events: currentUser', this.props.currentUserId)
    // const path = this.props.match.path
    // if (path === '/search') {
    //   // green('Events: going to SEARCH')
    //   // this.props.requestSearchEvents(params.searchValue)
    // } else if (path === '/my-events') {
    //   // green('Events: going to MyEvents')
    //   this.props.eventsReadRequest(params.user)
    // } else {
    //   // green('Events: going to Events')
    //   //
    // }

  }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   // green('EVENTS getDerivedStateFromProps()')
  //   return null
  // }

  searchEvents = () => {
    const { searchText } = this.props
    const text = searchText
    green('Events.searchEvents: searchText', text)
    this.props.eventsSearchReadRequest(text)
    this.props.searchTextUnset()
//             eventsSearchReadRequest
//             eventsSearchReadRequest
    // this.props.eventsSearchReadRequest(this.props.searchText)
  }

  // componentDidUpdate(prevProps, prevState) {
  //   const { searchText } = this.props
  //   // green('EVENTS didUpdate()')
  //   if (searchText.length > 2) {
  //     green('perform search')
  //     this.props.eventsSearchReadRequest(searchText)
  //   }
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   green('SCU: nextProps', nextProps)
  //   green('SCU: nextState', nextState)
  // }

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
          <SearchEvent
            searchEvents={this.searchEvents}
          />
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
    searchText: searchSelectors.getSearchText(state)
  }
}

const actions = merge(eventActions, searchActions)

export default compose(
  withStyles(styles),
  connect(mapStateToProps, actions)
)(Events)

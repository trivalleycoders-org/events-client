import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import {
  Typography,
} from '@material-ui/core'
import { merge } from 'ramda'
/* User */
import * as searchActions from 'store/actions/search-actions'
import * as eventActions from 'store/actions/event-actions'

import * as eventsSelectors from 'store/selectors/events-selectors'
import * as authSelectors from 'store/selectors/auth-selectors'
import * as searchSelectors from 'store/selectors/search-selectors'
import * as requestSelectors from '../../store/selectors/request-selectors'

import { eventsSearchReadRequestKey } from 'store/actions/search-actions'
import EventsGrid from 'ui/EventsGrid'
/* Dev */
// eslint-disable-next-line
import { green } from 'logger'

const styles = theme => ({})

class SearchEvents extends React.Component {
  componentDidMount() {
    // green('componentDidMount: params', this.props.match.params)
    const { searchValue } = this.props.match.params
    this.props.eventsSearchReadRequest(searchValue)
  }

  componentDidUpdate(prevProps) {
    const searchValue = this.props.match.params.searchValue
    const currentPathname = this.props.location.pathname
    const prevPathname = prevProps.location.pathname
    if (currentPathname !== prevPathname) {
      green('** should update')
      this.props.eventsSearchReadRequest(searchValue)
    } else {
      green('** should NOT update')
    }
    // green('componentDidUpdate: current location.pathname', pathname)
    // green('componentDidUpdate: prev location.pathname', prevProps.location.pathname)

  }

  searchEvents = () => {
    const { searchText } = this.props
    const text = searchText
    green('Events.searchEvents: searchText', text)
    this.props.eventsSearchReadRequest(text)
    this.props.searchTextUnset()
  }

  // componentShouldUpdate(nextProps, nextState) {
  //   return this.props.requestReadAllEvents.status !== 'success'
  // }

  render() {
    const { classes, events, location, match } = this.props

    // green('** SearchEvents: props', this.props)
    if (this.props.requestReadAllEvents.status !== 'success') {
      return null
    } else {
      return (
        <div className={classes.pageMock}>
          <EventsGrid
            events={events}
            location={location}
            match={match}
          />
        </div>
      )
    }
  }
}

SearchEvents.propTypes = {
  classes: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
  return {
    events: eventsSelectors.getAllEvents(state),
    requestReadAllEvents: requestSelectors.getRequest(state, eventsSearchReadRequestKey),
    currentUserId: authSelectors.getUserId(state),
    searchText: searchSelectors.getSearchText(state)
  }
}

const actions = merge(eventActions, searchActions)

// export default compose(
//   withStyles(styles),
//   withRouter(connect(mapStateToProps, actions)),
// )(SearchEvents)

export default compose(

  withStyles(styles),
  connect(mapStateToProps, actions),
)(SearchEvents)
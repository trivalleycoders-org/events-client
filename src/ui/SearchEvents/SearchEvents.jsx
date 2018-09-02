import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
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
import SearchBox from 'ui/SearchBox'
/* Dev */
// eslint-disable-next-line
import { green } from 'logger'

const styles = theme => ({})

class SearchEvents extends React.Component {
  componentDidMount() {
    const { searchValue } = this.props.match.params
    this.props.eventsSearchReadRequest(searchValue)
  }

  componentDidUpdate(prevProps) {
    const searchValue = this.props.match.params.searchValue
    const currentPathname = this.props.location.pathname
    const prevPathname = prevProps.location.pathname
    if (currentPathname !== prevPathname) {
      this.props.eventsSearchReadRequest(searchValue)
    }
  }

  searchEvents = () => {
    const { searchText } = this.props
    const text = searchText
    this.props.eventsSearchReadRequest(text)
    this.props.searchTextUnset()
  }

  render() {
    const { classes, events } = this.props

    if (this.props.requestReadAllEvents.status !== 'success') {
      return null
    } else {
      return (
        <div className={classes.pageMock}>
          <SearchBox />
          <EventsGrid
            events={events}
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

export default compose(
  withStyles(styles),
  connect(mapStateToProps, actions),
)(SearchEvents)
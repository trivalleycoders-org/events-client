import React from 'react'
import { connect } from 'react-redux'
import { getAllEvents } from 'store/selectors/events-selectors'
import { getSearchText } from 'store/selectors/search-selectors'
import EventCards from 'ui/EventCards'

/* Dev */
// eslint-disable-next-line
import { green, purple } from 'logger'
import { logRender } from 'logging'

class SearchEventsContainer extends React.Component {

  render() {

    logRender && purple('SearchEventsContainer - render')

    const { events, searchText } = this.props
    return (
      <EventCards
        events={events}
        searchText={searchText}
      />
    )
  }
}

const mstp = (state) => {
  return {
    events: getAllEvents(state),
    searchText: getSearchText(state),
  }
}

export default connect(
  mstp,
)(SearchEventsContainer)

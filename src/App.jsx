import React, { Fragment } from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { compose } from 'recompose'
import { connect } from 'react-redux'

// User
import * as eventActions from 'store/actions/event-actions'
import AppBar from './AppBar'
import EventGrid from './EventGrid'
import NewEvent from './NewEvent'
import UploadImage from './UploadImage'
import withRoot from './withRoot'

class App extends React.Component {
  componentDidMount() {
    this.props.requestReadEvents()
  }

  render() {
    return (
      <Router>
        
        <Fragment>
        <AppBar />
        <Route path='/upload' component={UploadImage} />
        {/* <Route path='/tags' component={Tags} /> */}
        
        <Route path='/new-event' component={NewEvent} />
        <Route exact path='/' component={EventGrid} />
        </Fragment>
      </Router>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // events: eventSelectors.getAllEvents(state)
  }
}

export default connect(mapStateToProps, eventActions)(withRoot(App))

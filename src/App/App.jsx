import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'

import EventGrid3 from './EventGrid3'
import UploadImage from './UploadImage'
import NewEvent from './NewEvent' // is dropzone component

import * as eventActions from 'store/actions/event-actions'
import * as eventSelectors from 'store/selectors/events-selectors'

import Tags from './Tags'
import AppBar from 'elements/AppBar'

const styles = theme => ({
  root: {
    flexGrow: 1,
    fontSize: '2em',
  },
})

class App extends React.Component {
  componentDidMount() {
    this.props.requestReadEvents()
  }
  render() {
    return (
      <Router>
        <Fragment>
          <AppBar title='Events' />
          <Route path='/upload' component={UploadImage} />
          <Route path='/new-event' component={NewEvent} />
          <Route path='/tags' component={Tags} />
          <Route exact path='/' component={EventGrid3} />
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

export default compose(
  withStyles(styles),
  connect(mapStateToProps, eventActions)
)(App)
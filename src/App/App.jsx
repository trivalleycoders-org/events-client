
import { withStyles } from '@material-ui/core/styles'
import AppBar from 'elements/AppBar'
import React, { Component, Fragment } from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import EventGrid3 from './EventGrid3'
import UploadImage from './UploadImage'
import NewEvent from './NewEvent' // is dropzone component
import { connect } from 'react-redux'
import * as imageActions from 'store/actions/image-actions'
import { compose } from 'recompose'
import Tags from './Tags'

const styles = theme => ({
  root: {
    flexGrow: 1,
    fontSize: '2em',
  },
})

class App extends Component {

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
  return {}
}

export default compose(
  withStyles(styles),
  connect(mapStateToProps, imageActions)
)(App)
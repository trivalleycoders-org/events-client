import React, { Fragment } from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { connect } from 'react-redux'
// User
import * as eventActions from 'store/actions/event-actions'
import AppBar from 'ui/AppBar'
import Home from 'ui/Home'
import EventForm from 'ui/EventForm'
import withRoot from './withRoot'
import MyEvents from 'ui/MyEvents'

class App extends React.Component {
  componentDidMount() {
    this.props.requestReadEvents()
  }

  render() {
    return (
      <Router>
        <Fragment>
        <AppBar />
        <Route exact path='/my-events' component={MyEvents} />
        <Route exact path='/new-event' component={EventForm} />
        <Route exact path='/new-event/:_id' component={EventForm} />
        <Route exact path='/' component={Home} />
        </Fragment>
      </Router>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps, eventActions)(withRoot(App))

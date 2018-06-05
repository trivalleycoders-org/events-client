import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import AppBar from 'elements/AppBar'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { green } from 'logger'

class App extends Component {
  render() {

    return (
      <Router>
        <Fragment>
          <AppBar title='Rotary Club' />
          {/* <MembersTable handleMemberRowClick={this.handleMemberRowClick} />
          <Route
            exact
            path='/'
            render={props => <MemberDialog
              open={this.state.MemberDialog}
              handleClose={this.handleClose}
              action={this.state.action}
              {...props}
            />}
          /> */}
        </Fragment>
      </Router>
    )
  }
}

export default App

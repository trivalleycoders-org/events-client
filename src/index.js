import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './ui/App'
import AppBar from 'ui/AppBar'
import Snackbars from 'ui/Snackbars'
import AppDrawer from 'ui/AppDrawer'
// import Footer from 'ui/Footer'


ReactDOM.render(
  <Provider store={configureStore()}>
    <Router>
      <React.Fragment>
        <AppBar />
        <Snackbars />
        <AppDrawer />
        <Route component={App} />
      </React.Fragment>
    </Router>
  </Provider>,
  document.getElementById('root')
)

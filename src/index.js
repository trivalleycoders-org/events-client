import React from 'react'
import ReactDOM from 'react-dom'
import {  } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from './store'
import App from './ui/App'

ReactDOM.render(
  <Provider store={configureStore()}>
      <App />
  </Provider>,
  document.getElementById('root')
)

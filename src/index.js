import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store'
import AppWrapper from './App/AppWrapper'

ReactDOM.render(
  <Provider store={configureStore()}>
    <AppWrapper />
  </Provider>,
  document.getElementById('root')
)

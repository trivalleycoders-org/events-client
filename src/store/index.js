import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers'

const logger = createLogger({ collapsed: true })
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const reduxLogging = false

export default function configureStore() {
  let store
  if (reduxLogging) {
    store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk, logger)))
  } else {
    store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
  }

  return store
}

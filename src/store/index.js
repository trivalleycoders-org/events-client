import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers'
import reduxCatch from 'redux-catch'

function errorHandler(error, getState, lastAction, dispatch) {
  console.error('redux-catch', error)
  console.debug('redux-catch', 'current state', getState())
  console.debug('redux-catch', 'last action was', lastAction)
  // optionally dispatch an action due to the error using the dispatch parameter
}

const logger = createLogger({ collapsed: true })
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default function configureStore() {
  // const store = createStore(rootReducer, applyMiddleware(thunk, logger))
  // const store = createStore(rootReducer, applyMiddleware(thunk))
  const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(applyMiddleware(reduxCatch(errorHandler), thunk, logger)))
  return store
}

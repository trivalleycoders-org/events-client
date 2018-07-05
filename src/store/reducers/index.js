import { combineReducers } from 'redux'
import requests from './requests'
import images from './images'
import { events, eventsUi } from './events'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  events,
  eventsUi,
  images,
  requests,
  form: formReducer,
})

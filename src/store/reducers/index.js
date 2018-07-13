import { combineReducers } from 'redux'
import requests from './requests'
import imageUpload from './upload-image'
import { events, eventsUi } from './events'
import { reducer as formReducer } from 'redux-form'
import toasts from './toasts'

export default combineReducers({
  events,
  eventsUi,
  imageUpload,
  requests,
  toasts,
  form: formReducer,
})

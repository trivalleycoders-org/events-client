import { combineReducers } from 'redux'
import requests from './requests'
import imageUpload from './upload-image'
import { events, eventsUi } from './events'
import { cities, postalCodes } from './location'
import { reducer as formReducer } from 'redux-form'
import toasts from './toasts'

export default combineReducers({
  cities,
  events,
  eventsUi,
  imageUpload,
  postalCodes,
  requests,
  toasts,
  form: formReducer,
})

import { combineReducers } from 'redux'
import requests from './requests'
import imageUpload from './upload-image'
import { events, eventsUi } from './events'
import { postalCodes } from './location'
import { reducer as formReducer } from 'redux-form'
import snackbar from './snackbar'

export default combineReducers({
  events,
  eventsUi,
  imageUpload,
  postalCodes,
  requests,
  snackbar,
  form: formReducer,
})

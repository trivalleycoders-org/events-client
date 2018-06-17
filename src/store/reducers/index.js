import { combineReducers } from 'redux'
import requests from './requests'
import images from './images'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  images,
  requests,
  form: formReducer,
})

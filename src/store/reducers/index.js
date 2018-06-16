import { combineReducers } from 'redux'
import requests from './requests'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  requests,
  form: formReducer,
  // uiData: combineReducers({
  //   members: combineReducers({
  //   })
  // })
})

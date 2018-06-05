import { combineReducers } from 'redux'
import requests from './requests'

export default combineReducers({
  requests,
  uiData: combineReducers({
    members: combineReducers({
    })
  })
})

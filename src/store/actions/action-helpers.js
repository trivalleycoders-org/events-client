// eslint-disable-next-line
import { orange, red } from 'logger'

export const logError = (err, key) => {

  red(`actions.logError(key:${key})`, err)
}
export const logReturnValue = (value) => {
  return ({
    type: 'app/noAction'
  })
}

const markRequestPending = (key) => {
  return {
    type: 'app/markRequestPending',
    meta: { key },
  }
}

const markRequestSuccess = (key) => {
  return ({
    type: 'app/markRequestSuccess',
    meta: { key },
  })
}

const markRequestFailed = (reason, key) => {
  return {
    type: 'app/markRequestFailed',
    payload: reason,
    meta: { key },
  }
}

export const createRequestThunk = ({ request, key, start = [], success = [], failure = [] }) => {
  // red('createRequestThunk', request)
  return (...args) => (dispatch) => {
    const requestKey = (typeof key === 'function') ? key(...args) : key
    start.forEach((actionCreator) => {
      dispatch(actionCreator())
    })
    dispatch(markRequestPending(requestKey))
    return request(...args)
      .then((data) => {
        success.forEach((actionCreator) => {
          dispatch(actionCreator(data))
        })
        dispatch(markRequestSuccess(requestKey))
      })
      .catch((reason) => {
        failure.forEach((actionCreator) => dispatch(actionCreator(reason)))
        dispatch(markRequestFailed(reason, requestKey))
      })
  }
}

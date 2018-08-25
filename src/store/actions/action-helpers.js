// eslint-disable-next-line
import { orange, red } from 'logger'

export const logError = (err, key) => {

  red(`actions.logError(key:${key})`, err)
}
export const logReturnValue = (value) => {
  // orange('actions.logReturnValue', value)
  return ({
    type: 'app/noAction'
  })
}

const markRequestPending = (key) => {
  // log(`pending (${key})`, '', 'blue')
  return {
    type: 'app/markRequestPending',
    meta: { key },
  }
}

const markRequestSuccess = (key) => {
  // log(`success (${key})`, '', 'blue')
  return ({
    type: 'app/markRequestSuccess',
    meta: { key },
  })
}

const markRequestFailed = (reason, key) => {
  // log(`failed (${key})`, '', 'blue')
  return {
    type: 'app/markRequestFailed',
    payload: reason,
    meta: { key },
  }
}

export const createRequestThunk = ({ request, key, start = [], success = [], failure = [] }) => {
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

/* Dev */
// eslint-disable-next-line
import { yellow } from 'logger'

const noStatus = {
  status: 'none',
  error: null,
}
export const getRequest = (state, key) => {
  const req = state.requests[key]
  return req === undefined
    ? noStatus
    : req
}

// ** Don't think this is used or eneded?
export const getRequestStatus = (state, key) => {
  if (state.requests.hasOwnProperty(key)) {
    return state.requests[key].status
  }
  return ''
}

export const getRequests = (state) => {

  return state.requests
}

export const areRequestsPending = (requests) => {
  return Object.keys(requests)
    .some((key) => requests[key].status === 'pending')
}

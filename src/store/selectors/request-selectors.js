// import { yellow } from 'logger'
export const getRequest = (state, key) => {
  return state.requests[key] || {}
}
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

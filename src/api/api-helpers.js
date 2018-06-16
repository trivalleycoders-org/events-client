import { pink, red } from 'logger'

const rejectErrors = (res) => {
  const { status } = res
  // pink('api-helpers.rejectErrors: status', status)
  if (status >= 200 && status < 300) {
    return res
  }
  return Promise.reject({ message: res.statusText })
}

export const fetchJson = (url, options = {}) => (

  fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  })
  .then(rejectErrors)
  .then((res) => {
    pink('api-helpers.fetchJson: res', res)
    res.json()
  })
)

export const fetchUploadImage = (url, options = {}) => (
  fetch(url, {
    ...options,
    headers: {
      ...options.headers,
    },
  })
  .then(rejectErrors)
  .then(res => res.send())
)

export default { fetchJson, fetchUploadImage }

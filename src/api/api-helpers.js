/* Dev */
// import { pink } from 'logger'

const rejectErrors = (res) => {
  const { status } = res
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
  .then((res) => res.json())
)

export const fetchUploadImage = (url, options = {}) => (
  fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      'Accept': 'application/json',
    },
  })
  .then(rejectErrors)
  .then(res => res.json())
)

export default { fetchJson, fetchUploadImage }

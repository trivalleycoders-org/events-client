/* Dev */
// import { pink } from 'logger'

const rejectErrors = (res) => {
  const { status } = res
  if (status >= 200 && status < 300) {
    return res
  } else if (status === 422) {
    return Promise.reject({ error: 'Email or Password is Invalid' })
  }
  return Promise.reject(res)
}

export const fetchJson = (url, options = {}) => (
  fetch(url, {
    ...options,
    credentials: 'include',
    headers: {
      ...options.headers,
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'authorization': `Token ${window.localStorage.getItem('jwt')}`
    },
  }).then(rejectErrors)
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

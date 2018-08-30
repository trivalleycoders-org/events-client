/* Dev */
// import { pink } from 'logger'
import {parse } from './cookie-parser'

const rejectErrors = (res) => {
  const { status } = res
  if (status >= 200 && status < 300) {
    return res
  } else if (status === 422) {
    return Promise.reject({ error: 'Email or Password is Invalid' })
  }
  return Promise.reject(res)
}

// const getCookie = () => {
//   const cookie = document.cookie
//   if (!cookie) return []

//   var decodedCookie = decodeURIComponent(cookie)
//   console.log('decodedCookie', decodedCookie)

//   var ca = decodedCookie.split(';')
//   console.log('ca: ', ca)
//   let finalAry ={}

//   const filteredArr = ca.filter(item => item.split('=').indexOf('token') !== -1)
//   console.log ('filteredArr: ', filteredArr)

//   const splitArr = filteredArr[0].split('=')
//   console.log('splitArr: ', splitArr)

//   finalAry.token = splitArr[1]
//   console.log('finalAry: ', finalAry)

//   return finalAry
// }

export const fetchJson = (url, options = {}) => {
  // const token = store.auth ? '' : `Token ${store.auth.currentUser.token}`
  let token
  console.log('cookie parser: ', parse(document.cookie))
  const tokenObj = parse(document.cookie)
  let headers = {
    ...options.headers,
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }

  console.log('tokenObj: ', tokenObj)
  console.log('tokenObj.hasproperty: ', tokenObj.hasOwnProperty('token'))

  if (tokenObj.hasOwnProperty('token')) {
    token = `Token ${tokenObj.token}`
    console.log('inside token available', token)
    headers.authorization = token
  }

  console.log('headers: ', headers)
  return (
    fetch(url, {
      ...options,
      credentials: 'include',
      headers,
    }).then(rejectErrors)
      .then((res) => res.json())
  )
}

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

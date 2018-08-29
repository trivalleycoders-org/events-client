import differenceInMinutes from 'date-fns/difference_in_minutes'
// eslint-disable-next-line
import { green, red } from 'logger'

export const setCachedData = (key, values) => {
  try {
    const data = {
      timestamp: Date.now(),
      items: values,
    }
    localStorage.setItem(key, JSON.stringify(data))
    green('setCachedData:data is set', data)
  }
  catch (e) {
    red(`ERROR: could not set local storage for data with key: ${key}`)
  }

}

/*
    key: the key of local storage to retrieve
    returns: data stored || false if cache is over 60 minutes old
*/
export const getCachedData = (key) => {
  // expiration is > one hour
  const data =  JSON.parse(localStorage.getItem(key))
  // green('getCachedData: data', data)
  if (data === null) {
    return false
  }
  const cachedDate = new Date(data.timestamp)
  const diff = differenceInMinutes(cachedDate, new Date())
  // green('diff', diff)
  if (diff > -600) {
    // green('getCachedData: returning items', data.items)
    return data.items
  } else {
    // green('getCachedData: returning false', false)
    return false
  }

}

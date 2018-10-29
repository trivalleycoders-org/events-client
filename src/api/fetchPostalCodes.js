import debounce from 'lib/debounce'
import { fetchJson } from './api-helpers'
import { red } from 'logger'

/* Dev */
// eslint-disable-next-line
import { pink } from 'logger'

const fetchPostalCodes = debounce(

  async (searchString) => {
    try {
      const data = await fetchJson(
        `/api/location/postal-code/${searchString}`,
        {
          method: 'GET',
        }
      )
      // pink('fetchPostalCodes: data.data', data.data)
      return data.data
    }
    catch (e) {
      red('api.postalCodes.read', e)
    }
  },
  100
)

export default fetchPostalCodes
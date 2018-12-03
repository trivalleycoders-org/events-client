import debounce from 'lib/debounce'
import { fetchJson } from './api-helpers'
import { red } from 'logger'

const fetchPostalCodes = debounce(

  async (searchString) => {
    try {
      const data = await fetchJson(
        `/api/location/postal-code/${searchString}`,
        {
          method: 'GET',
        }
      )
      return data.data
    }
    catch (e) {
      red('api.postalCodes.read', e)
    }
  },
  100
)

export default fetchPostalCodes
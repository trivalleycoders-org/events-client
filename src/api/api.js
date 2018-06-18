import { fetchJson, fetchUploadImage } from './api-helpers'
import { pink, red } from 'logger'

export default {
  images: {
    create(formData) {
      pink('api.images: formData', formData)
      return fetchUploadImage(
        '/images',
        {
          method: 'POST',
          body: formData
        }
      ).then(data => {
        pink('/images/create', data)
        return data
      }).catch(e => {
        red('api.images.create: ERROR: ', e)
      })
    },
    getTest() {
      return fetchJson(
        '/images/test',
        { method: 'GET' }
      ).then(data => {
        pink('api.images.getTest: data', data)
        return data
      }).catch(e => {
        red('api.images.getTest ERROR: ', e)
      })
    }
  },
  events: {
    async create(event) {
      pink('event', event)
      const data = await fetchJson(
        '/events',
        {
          method: 'POST',
          body: JSON.stringify(event)
        }
      )
      return data
    }
  },
}

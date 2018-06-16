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
      ).then((data) => {
        pink('/images/create', data)
        return data
      }).catch(e => {
        red('api.images.create: ERROR: ', e)
      })
    },
    getTest() {
      return fetchJson(
        '/images',
        {
          method: 'GET',
        }
      ).then(data => {
        return data
      }).catch(e => {
        red('api.images.getTest: ERROR: ', e)
      })
    },
  },
}

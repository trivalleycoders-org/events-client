import { fetchJson, fetchUploadImage } from './api-helpers'
import { pink, red } from 'logger'

export default {
  events: {
    async create(event) {

      const data = await fetchJson(
        '/events',
        {
          method: 'POST',
          body: JSON.stringify(event)
        }
      )
      return data
    },
    async read() {
      const data = await fetchJson(
        '/events',
        {
          method: 'GET',
        }
      )
      pink('api.event.read: data', data)
      return data
    },
    async search(event) {
      const searchUrl = '/search?searchTerm=' + JSON.stringify(event)
      const data = await fetchJson(
        searchUrl,
        {
          method: 'GET',
        }
      )
      return data
    },
  },
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
  tags: {
    async create(tag) {
      pink('tag', tag)
      const data = await fetchJson(
        '/tags',
        {
          method: 'POST',
          body: JSON.stringify(tag)
        }
      )
      return data
    }
  }
}

import { fetchJson, fetchUploadImage } from './api-helpers'
import { red } from 'logger'
import { pink } from 'logger'

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
      return data
    },
    async patch(event) {
      pink('api.patch: event', event)
      const _id = event._id
      const data = await fetchJson(
        `/events/${_id}`,
        {
          method: 'PATCH',
          body: JSON.stringify(event)
        }
      )
      return data
    }
  },
  images: {
    create(formData) {
      // pink('api.images: formData', formData)
      return fetchUploadImage(
        '/images',
        {
          method: 'POST',
          body: formData
        }
      ).then(data => {
        // pink('/images/create', data)
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
        // pink('api.images.getTest: data', data)
        return data
      }).catch(e => {
        red('api.images.getTest ERROR: ', e)
      })
    }
  },
  tags: {
    async create(tag) {
      // pink('tag', tag)
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

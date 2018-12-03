import { fetchJson, fetchUploadImage } from './api-helpers'
import fetchPostalCodes from './fetchPostalCodes'

/* Dev */
// eslint-disable-next-line
import { pink } from 'logger'

export default {
  users: {
    async register(user) {
      try {
        const data = await fetchJson(
          '/api/users',
          {
            method: 'POST',
            body: JSON.stringify(user)
          }
        )
        return data.data
      }
      catch (e) {
        const error = await e.error
        throw error
      }
    },
    async login(user) {
      try {
        const data = await fetchJson(
          '/api/users/login',
          {
            method: 'POST',
            body: JSON.stringify(user)
          }
        )
        return data.data
      }
      catch (e) {
        const error = await e.error
        throw error
      }
    },
    async update(password) {
      try {
        const data = await fetchJson(
          '/api/user',
          {
            method: 'PUT',
            body: JSON.stringify(password)
          }
        )
        return data.data
      }
      catch (e) {
        const error = await e.error
        throw error
      }
    }
  },
  postalCodes: {
    read: async (searchString) => {
      const data = await fetchPostalCodes(searchString)
      if (data === undefined) {
        return []
      }
      return data
    }
  },
  events: {
    async createOne(event) {
      try {
        const data = await fetchJson(
          '/api/events',
          {
            method: 'POST',
            body: JSON.stringify(event)
          }
        )
        return data.data
      }
      catch (e) {
        const error = await e.error
        throw error
      }

    },
    async read(user) {
      try {
        const data = await fetchJson(
          '/api/events',
          {
            method: 'GET',
          }
        )
        return data.data
      }
      catch (e) {
        const error = await e.error
        throw error
      }
    },
    async forUserRead(userId) {
      try {
        const data = await fetchJson(
          `/api/events/user/${userId}`,
          {
            method: 'GET',
          }
        )
        return data.data
      }
      catch (e) {
        const error = await e.error
        throw error
      }
    },
    async patch(event) {
      try {
        const _id = event._id
        const data = await fetchJson(
          `/api/events/${_id}`,
          {
            method: 'PATCH',
            body: JSON.stringify(event)
          }
        )
        return data.data
      }
      catch (e) {
        const error = await e.error
        throw error
      }
    },
    async delete(id) {
      try {
        const data = await fetchJson(
          `/api/events/${id}`,
          {
            method: 'DELETE'
          }
        )
        return data.data
      }
      catch (e) {
        const error = await e.error
        throw error
      }
    },
    async search(searchText) {
      try {
        const searchUrl = '/api/search?searchTerm=' + JSON.stringify(searchText)
        const data = await fetchJson(
          searchUrl,
          {
            method: 'GET',
          }
        )
        pink('api.search: data', data.data)
        return data.data
      }
      catch (e) {
        const error = await e.error
        throw error
      }
    },
  },
  images: {
    create(formData) {
      return fetchUploadImage(
        '/api/images',
        {
          method: 'POST',
          body: formData
        }
      ).then(data => {
        return data
      }).catch(e => {
        const error = e.error
        throw error
      })
    },
  },
}

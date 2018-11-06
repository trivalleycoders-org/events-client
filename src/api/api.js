import { fetchJson, fetchUploadImage } from './api-helpers'
import { red } from 'logger'
import fetchPostalCodes from './fetchPostalCodes'

/* Dev */
// eslint-disable-next-line
import { pink } from 'logger'

export default {
  /* Cities
    - not in use but may be in future
  cities: {
    async read(searchString) {
      try {
        const data = await fetchJson(
          `/location/cities/${searchString}`,
          {
            method: 'GET',
            body: JSON.strinify
          }
        )
        // pink('api.cities.read: data', data)
        return data.data
      }
      catch (e) {
        red('api.cities.read', e)
      }
    }
  },
  */
  users: {
    async register(user) {
      // pink('api.users.register: ', user)
      try {
        const data = await fetchJson(
          '/api/users',
          {
            method: 'POST',
            body: JSON.stringify(user)
          }
        )
        // pink('data returned from api.users.register: ', data)
        return data.data
      }
      catch (e) {
        red('error in api.users.login', e)
        const error = await e.error
        throw error
      }
    },
    async login(user) {
      // pink('api.users.login: ', user)
      try {
        const data = await fetchJson(
          '/api/users/login',
          {
            method: 'POST',
            body: JSON.stringify(user)
          }
        )
        // pink('api.users.login: data', data)
        return data.data
      }
      catch (e) {
        red('error in api.users.login', e)
        const error = await e.error
        throw error
      }
    },
    async update(password) {
      // pink('api.users.update: ', password)
      try {
        const data = await fetchJson(
          '/api/user',
          {
            method: 'PUT',
            body: JSON.stringify(password)
          }
        )
        // pink('data returned from api.users.update: ', data)
        return data.data
      }
      catch (e) {
        red('error in api.users.login', e)
        const error = await e.error
        throw error
      }
    }
  },
  postalCodes: {
    read: async (searchString) => {
      pink('api.postalCodes.read: ', searchString)
      const data = await fetchPostalCodes(searchString)
      if (data === undefined) {
        return []
      }
      pink('api.postalCodes.read', searchString)
      return data
    }
  },
  events: {
    async createOne(event) {
      // pink('api.events.create: event', event)
      try {
        const data = await fetchJson(
          '/api/events',
          {
            method: 'POST',
            body: JSON.stringify(event)
          }
        )
        // pink('api.events.create: data', data)
        return data.data
      }
      catch (e) {
        red('api.events.create', e)
        const error = await e.error
        throw error
      }

    },
    async read(user) {
      // pink('api.events.read: data', 'start')
      try {
        const data = await fetchJson(
          '/api/events',
          {
            method: 'GET',
          }
        )
        // pink('api.events.read: data', data)
        return data.data
      }
      catch (e) {
        red('api.events.read', e)
        const error = await e.error
        throw error
      }
    },
    async forUserRead(userId) {
      // pink('api.events.forUserRead: userId', userId)
      try {
        const data = await fetchJson(
          `/api/events/user/${userId}`,
          {
            method: 'GET',
          }
        )
        // pink('api.events.forUserRead: data', data)
        return data.data
      }
      catch (e) {
        red('api.events.forUserRead', e)
        const error = await e.error
        throw error
      }
    },
    async patch(event) {
      try {
        // pink('api.patch: event', event)
        const _id = event._id
        const data = await fetchJson(
          `/api/events/${_id}`,
          {
            method: 'PATCH',
            body: JSON.stringify(event)
          }
        )
        // pink('api.patch: data', data.data)
        return data.data
      }
      catch (e) {
        red('api.events.patch', e)
        const error = await e.error
        throw error
      }
    },
    async delete(id) {
      // pink('api.delete: id', id)
      try {
        const data = await fetchJson(
          `/api/events/${id}`,
          {
            method: 'DELETE'
          }
        )
        // pink('api.delete: data', data)
        return data.data
      }
      catch (e) {
        // red('api.events.delete', e)
        const error = await e.error
        throw error
      }
    },
    async search(searchText) {
      try {
        // pink('api.events.search: searchText', searchText)
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
      // pink('api.images: formData', formData)
      return fetchUploadImage(
        '/api/images',
        {
          method: 'POST',
          body: formData
        }
      ).then(data => {
        // pink('/images/create', data)
        return data
      }).catch(e => {
        red('api.images.create: ERROR: ', e)
        const error = e.error
        throw error
      })
    },
  },




  // for possible future use
  // tags: {
  //   async create(tag) {
  //     try {
  //       // pink('tag', tag)
  //       const data = await fetchJson(
  //         '/tags',
  //         {
  //           method: 'POST',
  //           body: JSON.stringify(tag)
  //         }
  //       )
  //       return data
  //     }
  //     catch (e) {
  //       red('api.images.getTest ERROR: ', e)
  //     }
  //   }
  // }
}

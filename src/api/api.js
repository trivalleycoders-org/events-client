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
          '/users',
          {
            method: 'POST',
            body: JSON.stringify(user)
          }
        )
        // pink('data returned from api.users.register: ', data)
        return data.data
      }
      catch (e) {
        // red('error in api.users.register', e.body)
        // throw e
        red('error in api.users.login', e)
        const error = await e.error
        throw error
      }
    },
    async login(user) {
      // pink('api.users.login: ', user)
      try {
        const data = await fetchJson(
          '/users/login',
          {
            method: 'POST',
            body: JSON.stringify(user)
          }
        )
        // pink('data returned from api.users.login: ', data)
        return data.data
      }
      catch (e) {
        red('error in api.users.login', e)
        const error = await e.error
        throw error
      }
    },
    logout(user) {
      return new Promise(function (resolve, reject) {
        resolve('Will call remove token in action creator')
      })
    },
    validate(user) {
      return new Promise(function (resolve, reject) {
        resolve({ user })
      })
    },
    async update(password) {
      // pink('api.users.update: ', password)
      try {
        const data = await fetchJson(
          '/user',
          {
            method: 'PUT',
            body: JSON.stringify(password)
          }
        )
        pink('data returned from api.users.update: ', data)
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
      const a = await fetchPostalCodes(searchString)
      if (a === undefined) {
        return []
      }
      return a
    }
  },
  events: {
    async create(event) {
      // pink('api.events.create: event', event)
      try {
        const data = await fetchJson(
          '/events',
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
      }

    },
    async read(user) {
      try {
        const data = await fetchJson(
          '/events',
          {
            method: 'GET',
          }
        )
        // pink('api.events.read: data', data)
        return data.data
      }
      catch (e) {
        red('api.events.read', e)
      }
    },
    async patch(event) {
      try {
        // pink('api.patch: event', event)
        const _id = event._id
        const data = await fetchJson(
          `/events/${_id}`,
          {
            method: 'PATCH',
            body: JSON.stringify(event)
          }
        )
        // pink('api.patch: data', data)
        return data.data
      }
      catch (e) {
        red('api.events.patch', e)
      }
    },
    async delete(id) {
      // pink('api.delete: id', id)
      try {
        const data = await fetchJson(
          `/events/${id}`,
          {
            method: 'DELETE'
          }
        )
        // pink('api.delete: data', data)
        return data.data
      }
      catch (e) {
        red('api.events.delete', e)
      }
    },
    async search(searchText) {
      // pink('api.events.search: searchText', searchText)
      const searchUrl = '/search?searchTerm=' + JSON.stringify(searchText)
      const data = await fetchJson(
        searchUrl,
        {
          method: 'GET',
        }
      )
      // pink('api.search: data', data.data)
      return data.data
    },
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

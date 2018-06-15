import { fetchJson, fetchUploadImage } from './api-helpers'
import { pink } from 'logger'

export default {
  images: {
    create(formData) {
      return fetchUploadImage(
        '/images',
        {
          method: 'POST',
          body: formData
        }
      ).then((data) => {
        pink('/images/create', data)
        return data
      })
    }
  },
  members: {
    create(member) {
      pink('api.members.create: member in', member)
      return fetchJson(
        '/members',
        {
          method: 'POST',
          body: JSON.stringify(member)
        }
      ).then((data) => {
        pink('api.members.create: data out', data)
        return data
      })
    },
    read() {
      // yellow('** read **')
      return fetchJson(
        '/members',
        { method: 'GET' }
      )
    },
    patch(member) {
      pink('api.members.update: id', id)
      // pink('api.members.update: member', member)
      pink('api.patch: member', member)
      const _id = member._id
      return fetchJson(
        `/members/${_id}`,
        {
          method: 'PATCH',
          body: JSON.stringify(member)
        }
      )
    },
    delete(id) {
      return fetchJson(
        `/members/${id}`,
        {
          method: 'DELETE'
        }
      )
      .then((data) => {
        // console.log(data)
        return data.affectedRows ? id : -1
      })
    },
  },
}

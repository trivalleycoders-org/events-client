import { imageUploadOneKey } from '../actions/upload-actions'

// eslint-disable-next-line
import { blue } from 'logger'

const imageUpload = (state = {}, { type, payload }) => {

  switch (type) {
    case imageUploadOneKey:
      const o = {
        imageName: payload.Key,
        imageUrl: payload.Location,
      }
      return o
    default:
      return state
  }
}

export default imageUpload

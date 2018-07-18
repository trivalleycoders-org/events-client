import { keyUploadOneImage } from '../actions/upload-actions'
import { blue } from 'logger'

const imageUpload = (state = {}, { type, payload }) => {
  
  switch (type) {
    case keyUploadOneImage:
      blue('images: payload', payload)
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

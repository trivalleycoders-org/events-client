import { keyUploadOneImage } from '../actions/image-actions'

const images = (state = {}, { type, payload }) => {
  // blue('images: payload', payload)
  switch (type) {
    case keyUploadOneImage:
      return payload
    default:
      return state
  }
}

export default images

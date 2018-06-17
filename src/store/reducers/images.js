import { merge } from 'ramda'
import { keyUploadOneImage } from '../image-actions'
import { blue } from 'logger'

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

// eslint-disable-next-line
import { yellow } from 'logger'

export const getUploadedImageUrl = (state) => {
  const imageUrl = state.imageUpload.imageUrl || 'none'
  
  if (!(imageUrl === 'none')) {
    return imageUrl
  } else {
    return null
  }
}

export const getUploadedImageName = (state) => {
  const imageName = state.imageUpload.imageName || null
  if (!imageName === null) {
    return imageName
  } else {
    return null
  }
}

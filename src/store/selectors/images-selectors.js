import { isEmpty } from 'ramda'

export const getUploadedImageUrl = (state) => {
  const image = state.images

  if (!isEmpty(image)) {
    return state.images.Location
  } else {
    return null
  }
}

export const getUploadedImageName = (state) => {
  const image = state.images
  if (!isEmpty(image)) {
    return state.images.Key
  } else {
    return null
  }
}

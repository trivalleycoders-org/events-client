import { isEmpty } from 'ramda'

export const getCurrentImageUrl = (state) => {
  const image = state.images

  if (!isEmpty(image)) {
    return state.images.Location
  } else {
    return null
  }
}

export const getCurrentImageName = (state) => {
  const image = state.images
  if (!isEmpty(image)) {
    return state.images.Key
  } else {
    return null
  }
}

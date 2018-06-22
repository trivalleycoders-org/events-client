import { createRequestThunk, logError, logReturnValue } from './action-helpers'
import api from 'api'
// import { orange } from 'logger'

export const keyUploadOneImage = 'actionKeyUploadOneImage'

export const requestKeyUploadOneImage = 'requestKeyUploadOneImage'

export const requestKeyGetTest = 'requestGetTest'

const uploadOneImage = (imageInfo) => ({
  type: keyUploadOneImage,
  payload: imageInfo
})

export const requestUploadOneImage = createRequestThunk({
  request: api.images.create,
  key: requestKeyUploadOneImage,
  success: [ uploadOneImage ],
  failure: [ error => logError(error, requestKeyUploadOneImage) ],
})

export const requestGetTest = createRequestThunk({
  request: api.images.getTest,
  key: requestKeyGetTest,
  success: [ logReturnValue ],
  failure: [ error => logError(error, requestKeyGetTest) ],
})

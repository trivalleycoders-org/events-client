import { createRequestThunk, logError, logReturnValue } from './action-helpers'
import api from 'api'
// import { orange } from 'logger'

export const imageUploadOneKey = 'actionKeyUploadOneImage'

export const imageUploadOneRequestKey = 'imageUploadOneRequestKey'

const uploadOneImage = (imageInfo) => ({
  type: imageUploadOneKey,
  payload: imageInfo
})

export const imageUploadOneRequest = createRequestThunk({
  request: api.images.create,
  key: imageUploadOneRequestKey,
  success: [ uploadOneImage ],
  failure: [ error => logError(error, imageUploadOneRequestKey) ],
})
import { createRequestThunk, logError, logReturnValue } from './action-helpers'
import api from 'api'
import { orange } from 'logger'

export const keyUploadOneImage = 'actionKeyUploadOneImage'

export const requestKeyUploadOneImage = 'requestKeyUploadOneImage'

export const requestUploadOneImage = createRequestThunk({
  request: api.images.create,
  key: requestKeyUploadOneImage,
  success: [ logReturnValue ],
  failure: [ logError ]
})

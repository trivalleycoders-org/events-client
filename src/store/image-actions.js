import { createRequestThunk, logError, logReturnValue } from './action-helpers'
import api from 'api'
import { orange } from 'logger'

export const keyUploadOneImage = 'actionKeyUploadOneImage'

export const requestKeyUploadOneImage = 'requestKeyUploadOneImage'
export const requestKeyImageGetTest = 'requestKeyImageGetTest'

export const requestUploadOneImage = createRequestThunk({
  request: api.images.create,
  key: requestKeyUploadOneImage,
  success: [ logReturnValue ],
  failure: [ logError ]
})

export const requestImageGetTest = createRequestThunk({
  request: api.images.getTest,
  key: requestKeyImageGetTest,
  success: [ logReturnValue ],
  failure: [ logError ]
})

import { createRequestThunk, logError } from './action-helpers'
import api from 'api'
// import { orange } from 'logger'

export const keyCreateNewTag = 'actionKeyCreateTag'

export const requestKeyCreateNewTag = 'requestKeyCreateTag'


const createNewTag = (tag) => ({
  type: keyCreateNewTag,
  payload: { tag },
})

export const requestCreateNewTag = createRequestThunk({
  request: api.tags.create,
  key: requestKeyCreateNewTag,
  success: [ createNewTag ],
  failure: [ (error) => logError(error, requestKeyCreateNewTag) ]
})


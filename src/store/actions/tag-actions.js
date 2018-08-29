import { createRequestThunk, logError } from './action-helpers'
import api from 'api'
// import { orange } from 'logger'

export const tagCreateKey = 'actionKeyCreateTag'

export const tagCreateRequestKey = 'requestKeyCreateTag'


const tagCreate = (tag) => ({
  type: tagCreateKey,
  payload: { tag },
})

export const tagCreateRequest = createRequestThunk({
  request: api.tags.create,
  key: tagCreateRequestKey,
  success: [ tagCreate ],
  failure: [ (error) => logError(error, tagCreateRequestKey) ]
})


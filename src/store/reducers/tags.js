import { merge } from 'ramda'
import { keyCreateNewTag } from '../actions/tag-actions'
import { blue } from 'logger'


const tags = (state = [], { type, payload }) => {
  // blue('tags: payload', payload)
  switch (type) {
    case keyCreateNewTag:
      return merge(state, payload.tag)
    default:
      return state
  }
}

export default tags

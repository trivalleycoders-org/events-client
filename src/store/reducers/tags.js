import { merge } from 'ramda'
import { tagCreateKey } from '../actions/tag-actions'

// eslint-disable-next-line
import { blue } from 'logger'

const tags = (state = [], { type, payload }) => {
  switch (type) {
    case tagCreateKey:
      return merge(state, payload.tag)
    default:
      return state
  }
}

export default tags

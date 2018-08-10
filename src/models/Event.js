import * as types from './model-types'

export const Event = {
  title: {
    type: types.string,
    always: true,
  },
  organization: {
    type: types.string,
    always: true,
  },
  venueName: {
    type: types.string,
    always: false,
  },
  linkToUrl: {
    type: types.string,
    always: true,
  },
  price: {
    type: types.number,
    always: false,
  },
  free: {
    type: types.boolean,
    always: false,
  },
  category: {
    type: types.string,
    always: true,
  },
  tags: {
    type: types.array,
    always: false,
  },
  endDateTime: {
    type: types.date,
    always: true,
  },
  startDateTime: {
    type: types.date,
    always: true,
  },
  postalCode_id: {
    type: types.objectId,
    always: true,
  }
}

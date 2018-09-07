import { types } from 'models'

const EventModel = {
  title: {
    type: types.string,
    required: true,
  },
  organization: {
    type: types.string,
    required: true,
  },
  venueName: {
    type: types.string,
    required: false,
  },
  linkToUrl: {
    type: types.string,
    required: true,
  },
  price: {
    type: types.number,
    required: false,
  },
  free: {
    type: types.boolean,
    required: false,
  },
  category: {
    type: types.string,
    required: true,
  },
  tags: {
    type: types.array,
    required: false,
  },
  endDateTime: {
    type: types.date,
    required: true,
  },
  startDateTime: {
    type: types.date,
    required: true,
  },
  postalCode: {
    type: types.string,
    required: true,
  },
  userId: {
    type: types.objectId,
    required: true,
  },
}

export default EventModel
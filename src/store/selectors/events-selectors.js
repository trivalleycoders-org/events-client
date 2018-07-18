// eslint-disable-next-line
import { yellow } from 'logger'

export const getAllEvents = (state) => {
  const r = state.events || []
  return r
}

export const getEventEdit_id = (state) => {
  return state.eventsUi.edit_id || ''
}

export const getOneEvent = (state, _id) => {
  const event = state.events.filter(e => e._id === _id)
  return event[0]
}


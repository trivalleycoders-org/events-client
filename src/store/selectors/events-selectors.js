// import { yellow } from 'logger'

export const getAllEvents = (state) => {
  return state.events || {}
}

export const getEventEdit_id = (state) => {
  return state.eventsUi.edit_id || ''
}

export const getOneEvent = (state, _id) => {
  const event = state.events.filter(e => e._id === _id)
  // yellow('event-selectors.getOneEvent: event', event[0])
  return event[0]
}


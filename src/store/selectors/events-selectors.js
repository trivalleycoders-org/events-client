// eslint-disable-next-line
import { yellow } from 'logger'

export const getAllEvents = (state) => {
  const r = state.events || []
  return r
}

export const getEventById = (state, eventId) => {
  return state.events.find(e => e._id === eventId)
}

export const getEventsForUserId = (state, id) => {
  const r = state.events.filter(e => e.userId === id)
  return r[0]
}


// export const getOneEvent = (state, _id) => {
//   const event = state.events.filter(e => e._id === _id)
//   return event[0]
// }

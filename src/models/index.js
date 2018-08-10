import { Event as EventModel } from './Event'
import { validateModel as validate } from './validateModel'

export const Event = EventModel

export const validateModel = (model, data) => {
  return validate(model, data)
}
import { validateModel } from 'models'
import EventModel from 'ui/EventForm/EventModel'

const validEvent = {
  title: 'Some Title',
  organization: 'An Org',
  venueName: 'TheVenu',
  linkToUrl: 'http://trivalleycoders.org',
  price: 10,
  category: 'some-category',
  tags: [ 'one', 'two' ],
  endDateTime: new Date().toISOString(),
  startDateTime:  new Date().toISOString(),
  postalCode: '94582',
  userId: '5b8da331a685965241323678'
}

it('01 - should return true', () => {
  const r = validateModel(EventModel, validEvent)
  expect(r.result).toEqual(true)
})
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
const missingUserId = {
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
  // userId: '5b8da331a685965241323678'
}

const invalideObjectId = {
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
  userId: '10'
}


describe('validateModel', () => {
  it('01 - valid event: should return true', () => {
    const r = validateModel(EventModel, validEvent)
    expect(r.result).toEqual(true)
  })
  it('02 - missing userId: should return false', () => {
    const r = validateModel(EventModel, missingUserId)
    expect(r.result).toEqual(false)
    expect(r.error).toBe('required field not found - key: userId, type: objectId, value: undefined')
  })
  it('03 - invalide ObjectId: should return false', () => {
    const r = validateModel(EventModel, invalideObjectId)
    expect(r.result).toEqual(false)
    expect(r.error).toBe('type does not match key: userId, type: objectId, value: 10')
  })
})

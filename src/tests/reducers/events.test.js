import { events } from '../../store/reducers/events'
import { keyCreateEvent } from '../../store/actions/event-actions'
import eventsData from '../fixtures/events'

it('should set default state', () => {
  const state = events(undefined, { type: '@@INIT' })
  expect(state).toEqual([])
})

it('should add an event', () => {
  const newEvent = {
    event: {
      'title': 'A Holistic Approach to Hormonal Imbalances',
      'startDateTime': 1531447200000,
      'imageUrl': 'https://photo-app-tvc.s3.us-west-2.amazonaws.com/holistic-07-18-2018-1531929794702.jpg',
      'category': 'video',
      'free': true,
      'linkToUrl': 'some-url-bla',
      'tags': ['Health', 'Women'],
      'endDateTime': 1531450800000,
      'venue': 'Dublin Concert Hall',
      'organization': 'Holistic Snake Oil'
    }
  }

  const action = {
    type: keyCreateEvent,
    payload: newEvent
  }
  const state = events([eventsData.event], action)
  expect(state).toEqual([eventsData.event, newEvent.event])
})

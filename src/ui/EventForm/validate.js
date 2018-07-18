import compareAsc from 'date-fns/compareAsc'
import isEqual from 'date-fns/isEqual'
import { has } from 'ramda'
/* User */

/* Dev */
// eslint-disable-next-line
// import { green } from 'logger'

const hasCombinedDateTime = has('combinedDateTime')

const validate = values => {
  
  const errors = {}
  const { category, linkToUrl, organization, /*price, tags,*/ title, venue } = values
  let endDateTime
  let startDateTime

  if (hasCombinedDateTime(values)) {
    endDateTime = values.combinedDateTime.endDateTime
    startDateTime = values.combinedDateTime.startDateTime
  } else {
    errors.hasCombinedDateTime = 'Must select a date and time'
  }

  if (!category) {
    errors.category = 'Required'
  }
  if (!endDateTime) {
    errors.endDateTime = 'Required'
  } else if (compareAsc(new Date(startDateTime), new Date(endDateTime)) === 1) {
    errors.endDateTime = 'End date cannot be before start date'
  }
  if (!linkToUrl) {
    errors.linkToUrl = 'Required'
  }
  if (!organization) {
    errors.organization = 'Required'
  }
  if (!startDateTime) {
    errors.startDateTime = 'Required'
  }
  if (isEqual(startDateTime, endDateTime)) {
    errors.combinedDateTime = 'Start date/time and end date/time are the same'
  }
  if (!title) {
    errors.title = 'Required'
  }
  if (!venue) {
    errors.venue = 'Required'
  }
  return errors
}

export default validate

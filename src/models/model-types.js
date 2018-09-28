/* Dev */
// eslint-disable-next-line
import { green, red } from 'logger'

export const types = {
  array: 'array',
  boolean: 'boolean',
  date: 'date',
  isoDateString: 'isoDateString',
  number: 'number',
  objectId: 'objectId',
  string: 'string',
}


// Array
export const isArray = (val) => Array.isArray(val)

// String
export const isString = (val) => typeof val === 'string'

// Date
export const isISODateString = (val) => {
  const isoDateRegex = RegExp(/^(-?(?:[1-9][0-9]*)?[0-9]{4})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9])T(2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9])(.[0-9]+)?(Z)?$/g)
  return typeof val === 'string'
    ? isoDateRegex.test(val)
    : false
}

const isInstanceOfDate = (argument) => {
  return argument instanceof Date
}

const isValidDate = (dirtyDate) => {
  if (isInstanceOfDate(dirtyDate)) {
    return !isNaN(dirtyDate)
  } else {
    return false
  }
}

export const isDate = (val) => {
  if (isInstanceOfDate(val)) {
    return isValidDate(val)
  } else if (isNumber(val)) {
    // sure, a number could be a date but let's say not for this app
    return false
  } else if (isString(val)) {
    const d = new Date(val)
    return isValidDate(d)
  } else {
    // no idea. produce a good console message to help figure it out
    const msg = `Expected Date or date string. Received unknown value ${val} typeof ${typeof val}`
    red(msg)
    return false
  }
}

// Number
export const isNumber = (val) =>
  !isNaN(parseFloat(val)) && isFinite(val)

// Boolean
export const isBoolean = (val) => typeof val === 'boolean'

// ObjectId
export const isValidObjectId = (id) => {
  const objectIdRegex = RegExp(/^[0-9a-fA-F]{24}$/)
  const isValid = objectIdRegex.test(id)
  return isValid
}

// Notes
/* didn't find a fully recommended way of checking an ObjectId on the client but
  var myregexp = /^[0-9a-fA-F]{24}$/;
  is the most recommended.
others are:
const checkForHexRegExp = /^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i
const upvote = /^[a-f\d]{24}$/i

function validateObjectId(id)
{
    var bool=false;
    if(id.length==24) bool=/[a-f]+/.test(id);
    return bool;
}
*/
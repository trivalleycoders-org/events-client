
import { keys } from 'ramda'
import {
  isArray,
  isBoolean,
  isDate,
  isISODateString,
  isNumber,
  isString,
  isValidObjectId
} from './model-types'
import { hasProp } from 'lib'
/* Dev */
// eslint-disable-next-line
import { green, blue, red } from 'logger'

const checkType = (key, type, val ) => {
  switch (type) {
    case 'array':
      return isArray(val)
    case 'boolean':
      return isBoolean(val)
    case 'date':
      return isDate(val)
    case 'isoDateString':
      return isISODateString(val)
    case 'number':
      return isNumber(val)
    case 'string':
      const a = isString(val)
      return a
    case 'objectId':
      return isValidObjectId(val)
    default:
      throw new Error(`ERROR: unknown type for prop: ${key} with value ${val}`)
  }
}

export const validateModel = (model, values) => {
  const modelKeys = Object.entries(model)
  if ( keys(values).length === 0) {
    throw new Error('parameter values is empty - nothing to check')
  }
  if (keys(model).length === 0) {
    throw new Error('paremeter model is empty - nothing to check')
  }

  try {
    modelKeys.forEach(item => {
      const modelKey = item[0]
      const modelType = item[1]
      const valToTest = values[modelKey]
      // if values has the prop
      if (hasProp(modelKey, values)) {
        // check the type
        if (!checkType(modelKey, modelType.type, valToTest)) {
          const msg = `type does not match key: ${modelKey}, type: ${modelType.type}, value: ${valToTest}`
          red(msg)
          throw new Error(msg)
        }
      } else {
        // if required === true
        if (modelType.required) {
          red('required field not found')
          throw new Error(`required field not found - key: ${modelKey}, type: ${modelType.type}, value: ${valToTest}`)
        }
      }
    })
  }
  catch (e) {
    return { result: false, error: e.message}
  }
  return { result: true, error: null }
}

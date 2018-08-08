/* Dev */
// eslint-disable-next-line
import { green } from 'logger'
import * as types from './types'
import { has } from 'ramda'

const compare = (field, value, type) => {
  const ret = typeof value === type
  if (ret) {
    return true
  } else {
    throw new Error({message: `The field ${field} must be of type ${type} but received ${typeof value}`})
  }
}
green('types', types.String)


const Event = {
  title: types.String,
  organization: types.Number,
  dummy: types.String,
}

const hasProp = (obj, prop) => {
  obj.hasOwnProperty(prop)
}


export const shapeCheck = (values) => {
  green('values', values)
  const valuesArr = Object.entries(values)
  green('valuesArr', valuesArr)
  // const { title } = values
  // green('title', typeof values.title)
  // const expectedTypes = Object.entries(Event)
  // console.log(expectedTypes)
  // expectedTypes.forEach(item => {
  //   green('item', item)
  //   green(`compare ${item}`, typeof item[0] === Event[item[0]])
  // })
  // valuesArr.forEach(item => {
  //   green('item', item)
  // })
  const modelKeys = Object.entries(Event)
  modelKeys.forEach(item => {
    const modelKey = item[0]
    const modelType = item[1]
    green('modelKey', modelKey)
    green('modelValue', modelType)
    if (values.hasOwnProperty(modelKey)) {
      const val = values[modelKey]
      green('val', val)
      green('type match', typeof val === modelType)
    } else {
      // green(`${key} IS NOT present`)
      // is it required?
      // yes - should I return ture?
      // no - throw error?
    }
  })
}
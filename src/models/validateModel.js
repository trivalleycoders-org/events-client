
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

/* Dev */
// eslint-disable-next-line
import { green, blue, red } from 'logger'

const hasProp = (prop, obj) => {
  const ret = obj.hasOwnProperty(prop)
  return ret
}

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
  green('values', values)
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
        // if always === true
        if (modelType.always) {
          red('required field not found')
          throw new Error(`required field not found - key: ${modelKey}, type: ${modelType.type}, value: ${valToTest}`)
        }
      }
    })
  }
  catch (e) {
    throw e
  }

  return true
}

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


// const compare = (field, value, type) => {
//   const ret = typeof value === type
//   if (ret) {
//     return true
//   } else {
//     throw new Error({message: `The field ${field} must be of type ${type} but received ${typeof value}`})
//   }
// }
// green('types', types.String)


// const Event = {
//   title: {
//     type: types.string,
//     always: true,
//   },
//   organization: {
//     type: types.number,
//     always: true,
//   },
//   venueName: {
//     type: types.string,
//     always: false,
//   },
//   linkToUrl: {
//     type: types.string,
//     always: true,
//   },
//   price: {
//     type: types.number,
//     always: false,
//   },
//   free: {
//     type: types.boolean,
//     always: false,
//   },
//   category: {
//     type: types.string,
//     always: true,
//   },
//   tags: {
//     type: types.array,
//     always: false,
//   },
//   endDateTime: {
//     type: types.array,
//     always: true,
//   },
//   startDateTime: {
//     type: types.array,
//     always: true,
//   },
//   postalCode_id: {
//     type: types.string,
//     always: true,
//   }
// }

// export const shapeCheck = (values) => {
//   green('values', values)
//   // green('CHECKING')
//   // const valuesArr = Object.entries(values)
//   // green('valuesArr', valuesArr)
//   const modelKeys = Object.entries(Person)
//   green('modelKeys', modelKeys)
//   modelKeys.forEach(item => {
//     const modelKey = item[0]
//     const modelType = item[1]
//     if (hasProp(values, modelKey)) {
//       // return typeof modelType === values[modelKey]
//       const ret = typeMatch(values, modelKey, modelType.type)
//       green(`${modelKey} is a ${modelType.type}`, ret)
//       return ret
//     } else {
//       // we are here bec the object sent in does not have a key
//       // see if that key is required
//       if (modelType.always) {
//         // should I throw or return something?
//       }
//     }
//   })
// }
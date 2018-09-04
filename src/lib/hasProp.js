import { path } from 'ramda'

/*
    takes a . delimeted path as string
    such as: 'cat.dog.camel'
    or: 'horse'
*/

export const hasProp = (prop, obj) => {
  return path(prop.split('.'), obj) === undefined
    ? false
    : true
  //
}

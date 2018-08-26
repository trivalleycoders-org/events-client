export const hasProp = (prop, obj) => {
  const ret = obj.hasOwnProperty(prop)
  return ret
}
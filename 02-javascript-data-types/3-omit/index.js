/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {
  // const newObj = Object.assign({}, obj)

  Object.keys(obj)
    .filter((field) => fields.includes(field))
    .forEach((field) => delete obj[field])

  return obj
}

/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {
  //
  const newObj = Object.assign({}, obj)

  Object.keys(newObj)
    .filter((field) => !fields.includes(field))
    .forEach((field) => delete newObj[field])

  return newObj
}

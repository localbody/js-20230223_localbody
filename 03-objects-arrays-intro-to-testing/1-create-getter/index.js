/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */

export function createGetter(path) {
  const pathItems = path.split('.')

  return (obj) => {
    let object = obj

    for (const item of pathItems) {
      if (object === undefined) {
        break
      }
      object = object[item]
    }

    return object
  }
}

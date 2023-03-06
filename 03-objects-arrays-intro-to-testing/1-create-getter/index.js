/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
function createGetter(path) {
  return () => {
    console.log(path)
  }
}

const getter = createGetter('test')

getter()

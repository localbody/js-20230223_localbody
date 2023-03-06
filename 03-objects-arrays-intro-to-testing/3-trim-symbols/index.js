/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  if (size === 0) return ''
  if (!size) return string

  let previousLetter = ''
  let countRepeats = 0
  const result = []
  string.split('').forEach((item) => {
    if (item === previousLetter && countRepeats < size - 1) {
      ++countRepeats
      result.push(item)
    } else if (item !== previousLetter) {
      countRepeats = 0
      result.push(item)
    }
    previousLetter = item
  })

  return result.join('')
}

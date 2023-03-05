/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  const compareStrings = (string1, string2) => {
    return (
      (param === 'asc' ? 1 : -1) *
      string1.localeCompare(string2, 'ru', { caseFirst: 'upper' })
    )
  }
  return arr.concat().sort(compareStrings)
}

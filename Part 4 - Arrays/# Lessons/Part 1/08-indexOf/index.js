/*
  indexOf
  - Locating an Element in an Array

      Array.indexOf(searchElement, fromIndex)

  - As shown above, the indexOf() method accepts two named arguments.
    + The searchElement argument is the element that you want to find in the array.
    + The fromIndex is an array index at which the function starts the search.

*/

var scores = [10, 20, 30, 10, 40, 20]

// 1) The following example uses the indexOf() method to find the elements in the scores array:
console.log(scores.indexOf(10)) // 0
console.log(scores.indexOf(30)) // 2
console.log(scores.indexOf(50)) // -1
console.log(scores.indexOf(20)) // 1

// And the following example uses the fromIndex() with the negative values:
/*
  - Negative index counts back from the end of the array — if -array.length <= fromIndex < 0, fromIndex + array.length is used. Note, the array is still searched from front to back in this case.
  - If fromIndex < -array.length or fromIndex is omitted, 0 is used, causing the entire array to be searched.
  - If fromIndex >= array.length, the array is not searched and -1 is returned.
*/
console.log(scores.indexOf(20, -1)) // 5 (fromIndex = 6+ (-1) = 5)
console.log(scores.indexOf(20, -5)) // 1 (fromIndex = 6+ (-5) = 1)

const beasts = ['ant', 'bison', 'camel', 'duck', 'bison']
console.log('fromIndex', beasts.indexOf('bison', 2)) // 4

// 2) Assuming that you have the following array of objects, where each object has two properties: name and age.
const guests = [
  { name: 'John Doe', age: 30 },
  { name: 'Lily Bush', age: 20 },
  { name: 'William Gate', age: 25 },
]
// The following statement returns -1 even though the first element of the guests array and the searchElement have the same values in the name and ages properties. This is because they are two different objects.
console.log(
  'guests',
  guests.indexOf({
    name: 'John Doe',
    age: 30,
  })
) // -1

// 3) Sometimes, you want to find the indices of all occurrences of an element in an array. The following find() function uses the indexOf() method to do so.
function find(needle, haystack) {
  var results = []
  var idx = haystack.indexOf(needle)
  while (idx != -1) {
    results.push(idx)
    idx = haystack.indexOf(needle, idx + 1)
  }
  return results
}
// The following example uses the find() function above to return an array of positions of the number 10 in the scores array.
console.log(find(10, scores)) // [0, 3]

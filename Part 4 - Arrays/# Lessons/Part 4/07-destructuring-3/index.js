/*
  Array Destructuring

*/

// If the getItems() function doesn’t return an array and you expect an array, the destructing assignment will result in an error. For example:
function getItems() {
  return null
}
// let [x = 1, y = 2] = getItems() // err

// A typical way to solve this is to fallback the returned value of the getItems() function to an empty array like this:
let [a = 10, b = 20] = getItems() || []
console.log(a) // 10
console.log(b) // 20

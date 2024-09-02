/*
  Array Destructuring

*/

// Ex1
let a, b
;[a, b] = [10, 20]
console.log(a) // 10
console.log(b) // 20

// Ex4: default
function getItems() {
  return [10, 20]
}
let [, , thirdItem = 0] = getItems()
console.log(thirdItem) // 0

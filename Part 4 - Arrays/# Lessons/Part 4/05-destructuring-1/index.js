/*
  Array Destructuring

*/

// Ex1
function getData() {
  return [70, 80]
}

let [x, y, z] = getData()

console.log(x) // 70
console.log(y) // 80
console.log(z) // undefined

// Ex2
function getScores() {
  return [70, 80, 90, 100]
}
let [a, b, ...args] = getScores()
console.log(a) // 70
console.log(b) // 80
console.log(args) // [90, 100]

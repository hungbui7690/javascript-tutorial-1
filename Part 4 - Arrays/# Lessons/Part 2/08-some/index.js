/*
  Array some: Check If at Least one Array Element Passes a Test

*/

let marks = [4, 5, 7, 9, 10, 3]
let lessThanFive = marks.some(function (e) {
  return e < 5
})

lessThanFive = marks.some((e) => e < 5)

/////////////////////////
function exists(value, array) {
  return array.some((e) => e === value)
}

lessThanFive = exists(5, marks)

//////////////////////////
const range = {
  min: 8,
  max: 10,
}

let result = marks.some(function (e) {
  return e >= this.min && e <= this.max
}, range)

console.log(result)

///////////////////////////
// Caution: Empty arrays
// If you call the some() method on an empty array, the result is always false regardless of any condition. For example:
let resultX = [].some((e) => e > 0)
console.log(resultX)

resultX = [].some((e) => e <= 0)
console.log(resultX)

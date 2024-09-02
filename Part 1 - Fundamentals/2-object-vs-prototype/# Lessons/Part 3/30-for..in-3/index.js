/*
  for...in loop & Array

*/

// It’s good practice to not use the for...in to iterate over an array, especially when the order of the array elements is important.
// The following example works flawlessly (correctly):
const items1 = [10, 20, 30]
let total1 = 0

for (const item in items1) {
  total1 += items1[item]
}
console.log(total1)

/////////////////////////////
// However, someone may set a property of the built-in Array type in their libraries as follows:
Array.prototype.foo = 100

// Hence, the for...in will not work correctly. For example:
const items2 = [10, 20, 30]
let total2 = 0

for (var prop in items2) {
  console.log({ prop, value: items2[prop] })
  total2 += items2[prop]
}
console.log(total2)

//////////////////////////////
// Another example:
var arr = []

arr[2] = 3 // set the third element to 3, other elements are `undefined`

// The output shows three elements of the array, which is correct
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i])
}

// However, the for...in loop ignores the first two elements:
// The output shows only the third element, not the first two elements.
for (const key in arr) {
  console.log(arr[key])
}

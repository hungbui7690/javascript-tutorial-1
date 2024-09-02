/*
  Spread Operator
  - Note that ES6 also has the three dots ( ...) which is a rest parameter that collects all remaining arguments of a function into an array.

      - The spread operator (...) unpacks the elements of an iterable object.
      - The rest parameter (...) packs the elements into an array.

*/

// ES6 provides a new operator called spread operator that consists of three dots (...). The spread operator allows you to spread out elements of an iterable object such as an array, map, or set. For example:
// In this example, the three dots ( ...) located in front of the odd array is the spread operator. The spread operator (...) unpacks the elements of the odd array.
const odd = [1, 3, 5]
const combined = [2, 4, 6, ...odd]
console.log(combined)

const combinedX = [77, ...odd, 99]
console.log(combinedX)

// Rest Operator
function f(a, b, ...args) {
  console.log(args)
}
f(1, 2, 3, 4, 5) // [3, 4, 5]

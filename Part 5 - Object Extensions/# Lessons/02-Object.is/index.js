/*
  Object.is
  - check if two values are the same.
  - The Object.is() behaves like the === operator with two differences:
      -0 and +0
      NaN

*/

// The === operator treats -0 and +0 are the same value:
let amount = +0,
  volume = -0
console.log(volume === amount) // true

// However, the Object.is() treats +0 and -0 as different values. For example:
let amountX = +0,
  volumeX = -0
console.log(Object.is(amountX, volumeX)) // false

// The === operator considers NaN and NaN are different values. The NaN is the only number that does not equal itself. For example:
let quantity = NaN
console.log(quantity === quantity) // false

// However, Object.is() treats NaN as the same value:
let quantityX = NaN
console.log(Object.is(quantityX, quantityX)) // true

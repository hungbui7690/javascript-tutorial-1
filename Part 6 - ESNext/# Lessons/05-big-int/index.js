/*
  BigInt
  - allows you to represent whole numbers larger 2^53 - 1.
  - primitive type

*/

// To make a BigInt, you append n to the end of the number literal, for example:
let bigInt = 9007199254740991n

// Alternatively, you can call the function BigInt():
bigInt = BigInt(9007199254740991)

// See the following calculation with a Number:
let x = Number.MAX_SAFE_INTEGER
x = x + 1 // 9007199254740992
x = x + 1 // 9007199254740992 (same as above)

x = BigInt(Number.MAX_SAFE_INTEGER)
x = x + 1n
x = x + 1n
// x = x + 1 // err > cannot mix the type
console.log(x)

// The type of a BigInt is bigint. For example:
console.log(typeof bigInt) // bigint
console.log(typeof BigInt(100) === 'bigint') // true

// The / operator will also work with the whole numbers. However, the result will not return any fractional digits. For example:
let result = 3n / 2n
console.log(result) // 1n, not 1.5n

// A BigInt is not strictly equal (===) to a Number:
console.log(1n === 1) // false

// However, a BigInt is loosely equal to a number when you use the == operator:
console.log(1n == 1) // true

// You can use the <, <=, >, >= to compare a BigInt with a Number:
console.log(1n < 2) // true
console.log(2n > 1) // true
console.log(2n >= 2) // true

// Conditionals
let count = 0n
if (count) {
  console.log(true)
} else {
  console.log(false)
}

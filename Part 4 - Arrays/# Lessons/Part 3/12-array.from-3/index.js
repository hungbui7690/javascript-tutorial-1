/*
  Array.from() method


*/

////////////////////////////
// 1) Array from a Set
const set = new Set(['foo', 'bar', 'baz', 'foo'])
const arr1 = Array.from(set) // [ "foo", "bar", "baz" ]
console.log(arr1)

////////////////////////////
// 2) Array from a Map
const map = new Map([
  [1, 2],
  [2, 4],
  [4, 8],
])
const arr2 = Array.from(map) // [[1, 2], [2, 4], [4, 8]]
console.log(arr2)

const mapper = new Map([
  ['1', 'a'],
  ['2', 'b'],
])
Array.from(mapper.values()) // ['a', 'b']
Array.from(mapper.keys()) // ['1', '2']

////////////////////////////
// 3) Array from an Array-like object (arguments)
function f() {
  return Array.from(arguments)
}
const arr3 = f(1, 2, 3)
console.log(arr3) // [ 1, 2, 3 ]

////////////////////////////
// 4) Using arrow functions and Array.from()
// Using an arrow function as the map function to
// manipulate the elements
Array.from([1, 2, 3], (x) => x + x) // [2, 4, 6]

// Generate a sequence of numbers
// Since the array is initialized with `undefined` on each position,
// the value of `v` below will be `undefined`
Array.from({ length: 5 }, (v, i) => i) // [0, 1, 2, 3, 4]

////////////////////////////
// 5) Sequence generator (range)
// Sequence generator function (commonly referred to as "range", e.g. Clojure, PHP, etc.)
const range = (start, stop, step) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step)

// Generate numbers range 0..4
range(0, 4, 1) // [0, 1, 2, 3, 4]

// Generate numbers range 1..10 with step of 2
range(1, 10, 2) // [1, 3, 5, 7, 9]

// Generate the alphabet using Array.from making use of it being ordered as a sequence
range('A'.charCodeAt(0), 'Z'.charCodeAt(0), 1).map((x) =>
  String.fromCharCode(x)
)
// ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

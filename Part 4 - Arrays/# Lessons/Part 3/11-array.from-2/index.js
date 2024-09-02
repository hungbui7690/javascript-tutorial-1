/*
  Array.from() method


*/

////////////////////////////
// 1) To create an array from an array-like object in ES5, you iterate over all array elements and add each of them to an intermediate array like this:
function arrayFromArgs() {
  var results = []
  for (var i = 0; i < arguments.length; i++) {
    results.push(arguments[i])
  }
  return results
}
var fruits = arrayFromArgs('Apple', 'Orange', 'Banana')
console.log(fruits)

// To make it more concise, you can use the slice() method of the Array.prototype as follows:
function arrayFromArgsX() {
  return Array.prototype.slice.call(arguments)
}
var fruits = arrayFromArgsX('Apple', 'Orange', 'Banana')
console.log(fruits)

////////////////////////////
// 2) Create an array from an array-like object ES6
// The following example uses the Array.from() method to create a new array from the arguments object of a function:
function arrayFromArgs() {
  return Array.from(arguments)
}

console.log(arrayFromArgs(1, 'A'))

////////////////////////////
// 3) 2) JavaScript Array Array.from() with a mapping function
// The Array.from() method accepts a callback function that allows you to execute the mapping function on every element of the array that is being created. See the following example:
function addOne() {
  return Array.from(arguments, (x) => x + 1)
}
console.log(addOne(1, 2, 3))

////////////////////////////
// 4) JavaScript Array.from() with a this value
// If the mapping function belongs to an object, you can optionally pass the third argument to the Array.from() method. The object will represent the this value inside the mapping function. Consider this example:
let doubler = {
  factor: 2,
  double(x) {
    return x * this.factor
  },
}
let scores = [5, 6, 7]
let newScores = Array.from(scores, doubler.double, doubler)
console.log(newScores)

////////////////////////////
// 5) 4) Create an array from an iterable object
// Since the Array.from() method also works on an iterable object, you can use it to create an array from any object that has a [symbol.iterator] property. For example:
// First, define the even object with the [System.iterator] that returns even numbers from 0 to 10.
let even = {
  *[Symbol.iterator]() {
    for (let i = 0; i < 10; i += 2) {
      yield i
    }
  },
}
// Then, use the Array.from() method to create a new array of even numbers from the even object.
let evenNumbers = Array.from(even)
console.log(evenNumbers)

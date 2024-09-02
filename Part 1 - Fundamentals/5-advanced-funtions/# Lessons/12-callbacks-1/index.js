/*
  Callbacks
  - In JavaScript, functions are first-class citizens. Therefore, you can pass a function to another function as an argument.

  - By definition, a callback is a function that you pass into another function as an argument for executing later.

*/

let numbers = [1, 2, 4, 7, 3, 5, 6]

/////////////////////////////
// METHOD 1: The following defines a filter() function that accepts an array of numbers and returns a new array of odd numbers:
function filter(numbers) {
  let results = []
  for (const number of numbers) {
    if (number % 2 != 0) {
      results.push(number)
    }
  }
  return results
}
console.log(filter(numbers))

/////////////////////////////
// METHOD 2: using callback
function isOdd(number) {
  return number % 2 != 0
}

function filterX(numbers, fn) {
  let results = []
  for (const number of numbers) {
    if (fn(number)) {
      results.push(number)
    }
  }
  return results
}
console.log(filterX(numbers, isOdd))

/////////////////////////////
// METHOD 3: A callback can be an anonymous function, which is a function without a name like this:
function filterY(numbers, callback) {
  let results = []
  for (const number of numbers) {
    if (callback(number)) {
      results.push(number)
    }
  }
  return results
}

let oddNumbersY = filterY(numbers, function (number) {
  return number % 2 != 0
})
console.log(oddNumbersY)

/////////////////////////////
// METHOD 4: In ES6, you can use an arrow function like this:
function filterZ(numbers, callback) {
  let results = []
  for (const number of numbers) {
    if (callback(number)) {
      results.push(number)
    }
  }
  return results
}

let oddNumbersZ = filterZ(numbers, (number) => number % 2 != 0)
console.log(oddNumbersZ)

// A synchronous callback is executed during the execution of the high-order function that uses the callback. The isOdd and isEven are examples of synchronous callbacks because they execute during the execution of the filter() function.

/*
  Rest Params

*/

// Example 1: rest params
function sum(...args) {
  let total = 0
  for (const a of args) {
    total += a
  }
  return total
}
console.log(sum(1, 2, 3))

// Example 2: rest params
function sumX(...args) {
  return args
    .filter(function (e) {
      return typeof e === 'number'
    })
    .reduce(function (prev, curr) {
      return prev + curr
    })
}
let result = sumX(10, 'Hi', null, undefined, 20)
console.log(result)

// Example 3: Note that without the rest parameters, you have to use the arguments object of the function.
// However, the arguments object itself is not an instance of the Array type. Therefore, you cannot use the filter() method directly. In ES5, you have to use Array.prototype.filter.call() as follows:
function sumY() {
  return Array.prototype.filter
    .call(arguments, function (e) {
      return typeof e === 'number'
    })
    .reduce(function (prev, curr) {
      return prev + curr
    })
}
let resultY = sumY(10, 'Hi', null, undefined, 20)
console.log(resultY)

// Example 4: An arrow function does not have the arguments object. Therefore, if you want to pass some arguments to the arrow function, you must use the rest parameters. See the following example:
const combine = (...args) => {
  return args.reduce(function (prev, curr) {
    return prev + ' ' + curr
  })
}
let message = combine('JavaScript', 'Rest', 'Parameters')
console.log(message) // JavaScript Rest Parameters

// Example 5: dynamic function
var showNumbers = new Function('...numbers', 'console.log(numbers)')
showNumbers(1, 2, 3)

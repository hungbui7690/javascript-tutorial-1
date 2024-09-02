/*
  When You Should Not Use Arrow Functions

*/

// 1) Event handlers
const greeting = document.querySelector('#greeting')
const result = document.querySelector('#result')
const username = document.querySelector('#username')

username.addEventListener('keyup', () => {
  greeting.textContent = 'Hello ' + this.value // undefined
})

username.addEventListener('keydown', function () {
  result.textContent = 'Hello ' + this.value
})

// 2) Object methods
const counter = {
  count: 0,
  next: () => ++this.count,
  current: () => this.count,
}
console.log(counter.next()) // NaN

const counterX = {
  count: 0,
  next() {
    return ++this.count
  },
  current() {
    return this.count
  },
}
console.log(counterX.next()) // 1

// 3) Prototype methods
// The this value in these next() and current() methods reference the global object
function Counter() {
  this.count = 0
}
Counter.prototype.next = () => {
  return this.count
}
Counter.prototype.current = () => {
  return ++this.next
}

function CounterX() {
  this.count = 0
}
CounterX.prototype.next = function () {
  return this.count
}
CounterX.prototype.current = function () {
  return ++this.next
}

// 4) Functions that use the arguments object
// Arrow functions don’t have the arguments object. Therefore, if you have a function that uses arguments object, you cannot use the arrow function.
// For example, the following concat() function won’t work:
const concat = (separator) => {
  let args = Array.prototype.slice.call(arguments, 1)
  return args.join(separator)
}
// console.log(concat(1, 2, 3, 4)) // error

function concatX(separator) {
  let args = Array.prototype.slice.call(arguments, 1)
  return args.join(separator)
}
console.log(concatX(1, 2, 3, 4)) // 21314

/*
  Summary

    An arrow function doesn’t have its own this value. Instead, it uses the this value of the enclosing lexical scope. An arrow function also doesn’t have the arguments object.
    Avoid using the arrow function for event handlers, object methods, prototype methods, and functions that use the arguments object.
*/

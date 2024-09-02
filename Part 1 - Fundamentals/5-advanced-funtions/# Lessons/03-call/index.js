/*
  call Method
  - The Function.prototype type has the call() method 

*/

function add(x, y) {
  return x + y
}

////////////////////////////////
// 1) In JavaScript, a function is an instance of the Function type.
// The Function.prototype type has the call() method
console.log(add instanceof Function) // true

////////////////////////////////
// 2) The following calls the add() function but use the call() method instead:
// By default, the this inside the function is set to the global object i.e., window in the web browsers and global in Node.js.
let result = add.call(this, 10, 20)
console.log(result) // 30

////////////////////////////////
// 3)
var greeting = 'Hi'

var messenger = {
  greeting: 'Hello',
}

function say(name) {
  console.log(this.greeting + ' ' + name)
}

// Inside the say() function, we reference the greeting via the this value. If you just invoke the say() function via the call() method as follows:
say.call(this, 'John')

// However, when you invoke the call() method of say function object and pass the messenger object as the this value:
say.call(messenger, 'John')

////////////////////////////////
// 4) Chain constructors for an object
// You can use the call() method for chaining constructors of an object. Consider the following example:
function Box(height, width) {
  this.height = height
  this.width = width
}

function Widget(height, width, color) {
  Box.call(this, height, width)
  this.color = color
}

let widget = new Widget('red', 100, 200)
console.log(widget)

////////////////////////////////
// 5) function borrowing
const car = {
  name: 'car',
  start() {
    console.log('Start the ' + this.name)
  },
  speedUp() {
    console.log('Speed up the ' + this.name)
  },
  stop() {
    console.log('Stop the ' + this.name)
  },
}

const aircraft = {
  name: 'aircraft',
  fly() {
    console.log('Fly')
  },
}

// call the start() and speedUp() method of the car object and the fly() method of the aircraft object. However, passing the aircraft as the first argument into the start() and speedUp() methods:
// Inside the start() and speedUp() methods, the this references the aircraft object, not the car object. Therefore, the this.name returns the 'aircraft' string
car.start.call(aircraft)
car.speedUp.call(aircraft)
aircraft.fly()
// Technically, the aircraft object borrows the start() and speedUp() method of the car object. And function borrowing refers to an object that uses a method of another object.

////////////////////////////////
// 6) The following example illustrates how the arguments object borrows the filter() method of the Array.prototype via the call() function:
function isOdd(number) {
  return number % 2
}

function getOddNumbers() {
  return Array.prototype.filter.call(arguments, isOdd)
}

let results = getOddNumbers(10, 1, 3, 4, 8, 9)
console.log(results)

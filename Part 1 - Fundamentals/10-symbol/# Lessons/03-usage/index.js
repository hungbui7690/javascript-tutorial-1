/*
  Symbol usages

*/

///////////////////////////////
// A) Using symbols as unique values
// Whenever you use a string or a number in your code, you should use symbols instead. For example, you have to manage the status in the task management application.
const task = {
  status: '',
  setStatus(s) {
    this.status = s
  },
}

// Before ES6, you would use strings such as open, in progress, completed, canceled, and on hold to represent different statuses of a task. In ES6, you can use symbols as follows:
let statuses = {
  OPEN: Symbol('Open'),
  IN_PROGRESS: Symbol('In progress'),
  COMPLETED: Symbol('Completed'),
  HOLD: Symbol('On hold'),
  CANCELED: Symbol('Canceled'),
}
// complete a task
task.setStatus(statuses.COMPLETED)

///////////////////////////////
// B) Using a symbol as the computed property name of an object
// You can use symbols as computed property names. See the following example:

let status = Symbol('status')
let taskX = {
  [status]: statuses.OPEN,
  description: 'Learn ES6 Symbol',
}
console.log(taskX)

// To get all the enumerable properties of an object, you use the Object.keys() method.
console.log(Object.keys(taskX)) // ["description"]

// To get all properties of an object whether the properties are enumerable or not, you use the Object.getOwnPropertyNames() method.
console.log(Object.getOwnPropertyNames(taskX)) // ['description']

// To get all property symbols of an object, you use the Object.getOwnPropertySymbols() method, which has been added in ES6.
// The Object.getOwnPropertySymbols() method returns an array of own property symbols from an object.
console.log(Object.getOwnPropertySymbols(taskX)) // [Symbol(status)]

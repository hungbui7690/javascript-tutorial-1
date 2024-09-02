/*
  apply() method


*/

const person = {
  firstName: 'John',
  lastName: 'Doe',
}

function greet(greeting, message) {
  return `${greeting} ${this.firstName}. ${message}`
}

// 1) The following example shows how to use the apply() method to call the greet() function with the this set to the person object:
// The arguments of the greet() function was passed into the apply() method as an array.
let result1 = greet.apply(person, ['Hello', 'How are you?'])

// If you use the call() method, you need to pass the arguments of the greet() function separately as follows:
let result2 = greet.call(person, 'Hello', 'How are you?')

// 2) Function borrowing
// The apply() method allows an object to borrow the method of another object without duplicating the code.
const computer = {
  name: 'MacBook',
  isOn: false,
  turnOn() {
    this.isOn = true
    return `The ${this.name} is On`
  },
  turnOff() {
    this.isOn = false
    return `The ${this.name} is Off`
  },
}
const server = {
  name: 'Dell PowerEdge T30',
  isOn: false,
}

// The server object doesn’t have the turnOn() and turnOff() methods.
// To execute the turnOn() method of the computer object on the server object, you can use the apply() method as follows:
let result3 = computer.turnOn.apply(server)
console.log(result3)

// 3) Using the apply() method to append an array to another
// The apply() method allows you to append elements of an array to another:
let arr = [1, 2, 3]
let numbers = [4, 5, 6]

arr.push.apply(arr, numbers)
console.log(arr)
